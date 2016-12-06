function getDatePhrase (date, year) {
	if (!date) date = ''
	if (date.match(/abt/)) return ' about '+date+' '+year
	if (date.match(/\d/)) return ' on '+date+' '+year
	else return ' in '+date+' '+year
	}


function getAge (phrase1, eDate, eYear, bDate, bYear, phrase2) {
	if (eYear.trim() === '' || bYear.trim() === '?') return ''
	
	if (bDate === '?') bDate = '1 Jul'
	if (eDate === '?' || eDate === '') eDate = '1 Jul'
	
	if (! eDate.match(/[0-9]/)) eDate = '1 '+eDate
	if (! bDate.match(/[0-9]/)) bDate = '1 '+bDate
	
	eDate = eDate.replace(/bef|aft|abt|\*|,/, '')
	bDate = bDate.replace(/bef|aft|abt|\*|,/, '')
	eYear = eYear.replace(/bef|aft|abt|\*|,/, '')
	bYear = bYear.replace(/bef|aft|abt|\*|,/, '')
	
	eDate = eDate.replace(/\-.../, '')
	bDate = bDate.replace(/\-.../, '')
	
	var age = parseInt(eYear) - parseInt(bYear)
	if (age < 0) return phrase1+age+phrase2
	var eTime = new Date( eDate + ' 2000' )
	var bTime = new Date(bDate + ' 2000' )
	if (eTime < bTime) age--
	if (age < 0) age = 0
	
	return phrase1+age+phrase2
	}



function redisplay () {
	var out = ''
	var re, pron
	
	var everything = document.getElementById('input').value
	everything = everything.replace(/<b\>/g,'')
	everything = everything.replace(/<\/b\>/g,'')
	
	var records = everything.split('§')
	var given, sex, fullname, text, born, bdate
	
	// get the general information
	var fields = records[0].split('\n')
	for (var f=0;f<fields.length;f++) {
		var tuple = fields[f].trim().split(':')
		switch (tuple[0]) {
			 case 'given': given = tuple[1]; break
			 case 'sex': sex = tuple[1].trim(); break
			 case 'name': fullname = tuple[1]; break
			 case 'text': text = tuple[1]; break
			 case 'born': born = tuple[1]; break
			 case 'bdate': bdate = tuple[1]; break
			}
		}
	
	// set the page title
	document.querySelector('title').textContent = fullname
	
	// display the general information
	out += '<div class="dateAndRecord"><div><div class="recordDate"><span>	🕮</span><span style="font-size:70%;">1778-<br/>1858</span></div></div><div class="record"><p>'+text+'</p></div></div>\n'
	
	
	// WORK THROUGH EACH RECORD
	for (var i=1;i<records.length;i++) {
		var record = ''
		var info = { }
		info.date = '' // sets default for age calculation
		fields = records[i].split('\n')
		
		// read in the first line
		fields[0] = fields[0].replace(/ [\s]+/g, ' ')
		var firstline = fields[0].split(' ')
console.log(firstline)
		var year = firstline[1]
		var who = firstline[2]
		var what = ''
		if (firstline[3]) what = firstline[3]
		var background = ''
		var border = ''
		if (who && who.match(/brother|sister|father|mother|grandfather|grandmother/i)) background = ' other'
		if (who && who.match(/marriage/i)) background = ' marriage'
		if (who && who.match(/death/i)) background = ' death'

//console.log(recordAge, year, who, what)

		// make the title
		var title = ''
		var type = ''
		if (what && what.toLowerCase() === 'death') { title = 'Death of '+who; type = 'familydeath'; }
		else if (what && what.toLowerCase() === 'birth') { title = 'Birth of '+who; type = 'familybirth'; }
		else if (what && what.toLowerCase() === 'marriage') { title = 'Marriage of '+who; type = 'familymarriage'; }
		else { title = who; type = who; }

//console.log('title',title)

		var details = ''
		info.children = 0
		info.others = 0
	
		for (f=1;f<fields.length;f++) {
			// convert urls to links
			if (fields[f].match('http://')) {
				re = new RegExp("http://([^ ]+)","g")
				fields[f] = fields[f].replace(re, '<a target="_blank" href="http://$1">http://$1</a>');
				}
			if (fields[f].match('https://')) {
				re = new RegExp("https://([^ ]+)","g")
				fields[f] = fields[f].replace(re, '<a target="_blank" href="https://$1">http://$1</a>');
				}
	
			// collect detailed information for display
			details += fields[f]+"\n"
	
			// collect new info
			var parts = fields[f].trim().split(':')
			var censusline
// console.log(fields[f])
			switch (parts[0]) {
				 case 'given': info.given = parts[1]; break
				 case 'fullname': info.fullname = parts[1]; break
				 case 'sex': info.sex = parts[1].trim(); break
				 case 'kind': info.kind = parts[1]; break
				 case 'name': info.name = parts[1]; break
				 case 'date': info.date = parts[1]; break
				 case 'place': info.place = parts[1]; break
				 case 'parents': info.parents = parts[1]; break
				 case 'groom': info.groom = parts[1]; break
				 case 'gage': info.gage = parts[1]; break
				 case 'gocc': info.gocc = parts[1]; break
				 case 'gfather': info.gfather = parts[1]; break
				 case 'gfocc': info.gfocc = parts[1]; break
				 case 'bride': info.bride = parts[1]; break
				 case 'bage': info.bage = parts[1]; break
				 case 'bocc': info.bocc = parts[1]; break
				 case 'bfather': info.bfather = parts[1]; break
				 case 'bfocc': info.bfocc = parts[1]; break
				 case 'bstatus': info.bstatus = parts[1]; break
				 case 'bparish': info.bparish = parts[1].trim(); break
				 case 'gparish': info.gparish = parts[1].trim(); break
				 case 'length': info.length = parts[1]; break
				 case 'by': info.by = parts[1]; break
				 case 'witnesses': info.witnesses = parts[1]; break
				 case 'age': info.age = parts[1]; break
				 case 'head': censusline = parts[1].split(','); info.head = censusline[0]; break
				 case 'wife': censusline = parts[1].split(','); info.wife = censusline[0]; break
				 case 'child': info.children = info.children+1; break
				 case 'other': info.others = info.others+1; break
				 case 'text': info.text = parts[1]; break
				 case 'cause': info.cause = parts[1].trim(); break
				 case 'occ': info.occ = parts[1].trim(); break
				 case 'gravestone': info.gravestone = parts[1].trim(); break
				 case 'burplace': info.burplace = parts[1].trim(); break
				 case 'burdate': info.burdate = parts[1].trim(); break
				 case 'probate': info.probate = parts[1].trim(); break
				 case 'notes': info.notes = parts[1]; break
				}
//console.log(info.children, info.others)
			}

// console.log(info)
		
		
		record += '<p class="recordTitle">'+title+'</p>'
		switch (type) {
			case 'Person': record += '<p>'+text+'</p>'
					break
			case 'familybirth': record += '<p>'
					if (sex==='m') record += 'His '; else record += 'Her '
					record += who.toLowerCase() +' '+info.name+' was born '
					if (info.date) record+= getDatePhrase(info.date,year)
					if (info.place) record += ' at '+info.place;
					record += getAge(', when '+given+' was ', info.date, year, bdate, born, ' years old.')
					// record += ' when '+given+' was '+recordAge+' years old.'; 
					record += '</p>'
					break
			case 'familymarriage': record += '<p>'
					if (who.toLowerCase() === 'daughter') {
						record += given+'\'s '+who.toLowerCase()+info.bride+' married '+info.groom+getDatePhrase(info.date,year)
						if (info.place) record += ' at '+info.place
						record += '. </p>'
						}
					if (who.toLowerCase() === 'son') {
						record += given+'\'s '+who.toLowerCase()+info.groom+' married '+info.bride+getDatePhrase(info.date,year)
						if (info.place) record += ' at '+info.place
						record += '. </p>'
						}
			
					if (who.toLowerCase() === 'daughter' && info.gfather) {
						record += '<p>The father of the groom was '+info.gfather
						if (info.gfocc) record += ', '+info.gfocc
						record += '. '
						if (info.bfocc) record += ' The occupation of '+info.bfather+' is '+info.bfocc+'. '
						record += '</p>'
						}
					if (who.toLowerCase() === 'son' && info.bfather) {
						record += 'The father of the bride was '+info.bfather
						if (info.bfocc) record += ', '+info.bfocc
						record += '. '
						if (info.gfocc) record += ' The occupation of '+info.gfather+' is '+info.gfocc+'. '
						record += '</p>'
						}
					break
			case 'familydeath': record += '<p>'
					if (sex==='m') record += 'His '; else record += 'Her '
					record += who.toLowerCase() +' '+info.name+' passed away '
					if (info.date) record+= getDatePhrase(info.date,year)
					if (info.age) record += ', aged '+info.age+', '
					if (info.place) record += ' at '+info.place;
					record += getAge(', when '+given+' was ', info.date, year, bdate, born, ' years old.')
					// record += ' when '+given+' was '+recordAge+' years old.'; 
					if (info.cause) record += info.name+'\'s cause of death was '+info.cause+'. '
					record += '</p>'
					if (info.notes) record += '<p>'+info.notes+'</p>'
					break
			case 'Birth': record += '<p>'+fullname+' was born '+getDatePhrase(info.date,year)
					if (info.place) record += ' at '+info.place
					if (info.parents) record += ', to '+info.parents+'.'; 
					record += '</p>'
					break
			case 'Baptism': record += '<p>'+given+' was baptised '+getDatePhrase(info.date,year)
					if (info.place) record += ' at '+info.place+'.'; 
					record += '</p>'
					break
			case 'Marriage': record += '<p>'+given+' married '
					if (sex==='m') record += info.bride
					else record += info.groom
					record += ' at '+info.place+', '
					if (info.date) record+= getDatePhrase(info.date,year)
					if (sex==='m') pron = 'he'; else pron = 'she'
					record += getAge(' when '+pron+' was ', info.date, year, bdate, born, ' years old')
					record += '. '
					//record += ' when '
					//if (sex==='m') record += 'he'; else record += 'she'
					//record += ' was '+recordAge+' years old.</p>'
					
					if (info.bage || info.bstatus || info.gocc || info.bocc || info.bparish || info.gparish) record += '<p>'
					if (sex==='m') {
						if (info.bage) record += 'The bride was '+info.bage+' years old'
						if (info.bage && info.bstatus) record += ' and a '+info.bstatus
						else if (info.bstatus) record += ' The bride was a '+info.bstatus
						if (info.bage || info.bstatus) record += '. '
						}
					else {	
						if (info.gage) record += ' The groom was '+info.gage+' years old'
						if (info.gage && info.gstatus) record += ' and a '+info.gstatus
						else if (info.gstatus) record += ' The groom was a '+info.bstatus
						if (info.gage || info.gstatus) record += '. '
						}
					
					if (info.gocc) record += given+'\'s occupation was '+info.gocc+'. '
					if (info.bocc) record += given+'\'s occupation was '+info.bocc+'. '
				
					if (info.bparish && info.bparish === info.gparish) {
						if (info.gparish==='otp') record += ' Both were of this parish. '
						else record += ' Both were living at '+info.bparish+'. '
						}
					else {
						if (info.bparish) {
							if (info.bparish==='otp') record += ' The bride was of this parish'
							else record += ' The bride was from '+info.bparish
							}
						if (info.gparish && info.bparish) record += ' and the '
						else record += '. The '
						if (info.gparish) {
							if (info.gparish==='otp') record += ' groom was of this parish'
							else record += ' groom was from '+info.gparish
							}
						if (info.bparish || info.gparish) record += '. '
						}
					if (info.bage || info.bstatus || info.gocc || info.bocc || info.bparish || info.gparish) record += '</p>'

					if (info.bfather || info.gfather) record += '<p>'
					if (sex==='m') {
						if (info.bfather) record += ' The bride\'s father was '+info.bfather
						if (info.bfocc) record += ', and his occupation '+info.bfocc
						if (info.bfather) record += '. '
						if (info.gfocc) record += given+'\'s father\'s occupation was '+info.gfocc+'. '
						}
					else {
						if (info.gfather) record += ' The groom\'s father was '+info.gfather
						if (info.gfocc) record += ', and his occupation '+info.gfocc
						if (info.gfather) record += '. '
						if (info.bfocc) record += given+'\'s father\'s occupation was '+info.bfocc+'. '
						}
					if (info.bfather || info.gfather) record += '</p>'
					
					if (info.by && info.witnesses) record += '<p>They were married by '+info.by+' and the witnesses were '+info.witnesses+'.<p>'
					else { 
						if (info.by) record += '<p>They were married by '+info.by+'.<p>'
						if (info.witnesses) record += ' Witnesses were '+info.witnesses+'.<p>'
						}
					if (info.length) record += '<p>The marriage was to last for '+info.length+'.</p>'
					if (info.notes) record += '<p>'+info.notes+'</p>'
					break
					
			case 'Census': record += '<p>On '+info.date+' '+year+', '+given+' was living at '+info.place+', according to the census. The head of the household was '+info.head
// console.log( info.children, info.others )
					if (info.wife) record += ', with wife '+info.wife
					record += '. '
					if (info.others || info.children) record += ' In addition, there were '
					if (info.children) record += info.children+' children'
					if (info.children && info.others) record += ' and '
					if (info.others) record += info.others+' others'
					record += '.</p>'
					if (info.notes) record += '<p>'+info.notes+'</p>'
					break
					
			case 'Death': record += '<p>'+fullname+' died '+getDatePhrase(info.date,year)
					if (info.place) record += ' at '+info.place
					if (sex==='m') pron = 'he'; else pron = 'she'
					record += getAge(' when '+pron+' was ', info.date, year, bdate, born, ' years old')
					record += '. '
					if (info.cause) record += ' The cause was '+info.cause+'. '
					if (info.occ) {
						if (sex==='m') record += ' His '; else record += ' Her '
						record += ' occupation at the time was listed as '+info.occ+'. '
						}
					record += '</p>'

					if (info.burdate || info.burplace) {
						if (sex==='m') record += '<p>He '; else record += '<p>She '
						record += ' was buried at '+info.burplace
						if (info.burdate) record += getDatePhrase(info.burdate,year)
						record += '.</p>'
						}
					if (info.gravestone) {
						if (sex==='m') record += '<p>His '; else record += '<p>Her '
						record += ' gravestone reads: "'+info.gravestone+'".</p>'
						}
					if (info.probate) record += '<p>The probate index says: "'+info.probate+'".</p>'
					if (info.notes) record += '<p>'+info.notes+'</p>'
					break
					
			case 'Residence': record += '<p>'+info.notes+'</p>'; break
			}
		out += '<div class="dateAndRecord"><div><div class="recordDate"><span>'+getAge('', info.date, year, bdate, born, '')+'</span><span>'+year+'<span></div></div><div class="record '+border+background+'">' + record
		out += '<details'
		if (type === 'Census') out += ' open'
		out += '><summary>Details</summary><pre>'+details+'</pre></details>'
		out += '</div></div>\n'
		}
	return out
}
