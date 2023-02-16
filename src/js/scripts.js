//
// Scripts
//
import {getEpisode} from '/js/getEpisodeFromJSON.js'
import {createTableWithEpisode, createErrorTable, createUnknownDataTable} from '/js/tableCreation.js'
import {createMostPopularGrid, attachGridAfterElementById} from '/js/mostPopular.js'

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});



const button = document.getElementById("thisThing");

button.addEventListener('click', event => {
  getShow(document.getElementById("searchInput").value);
});


function getShow(nameOfShow) {
  var newName = nameOfShow.replace(/ /g,"-")
  
  fetch("https://www.episodate.com/api/show-details?q=" + newName)
    .then((response) => response.json())
    .then((response) => {
      var episodeInfo = getEpisode(response)
      if (episodeInfo === undefined || episodeInfo.length == 0){
        createErrorTable()
      }
      else if (("name" in episodeInfo) && ("season" in episodeInfo) && ("episode" in episodeInfo)){
        createTableWithEpisode(episodeInfo)
      }
      else createUnknownDataTable()
      
    })
    .catch((err) => console.error(err));
}

export function displayMostPopular() {
  fetch("https://sfayoajdsa2ve6u2lw4kbc6mja0gbqvj.lambda-url.us-east-2.on.aws/")
  .then((response) => response.json())
  .then((response) => {    
    var grid = createMostPopularGrid(response)
    attachGridAfterElementById(grid, 'displayMostPopularTable')
  })
}


export var theShowNames = ['armedandfamous','sommerdahl','sinner','redoaks','bestyears','badbatch',
'artsnight','impulse','teacher','tooningoutthenews','hollywooddarlings','kampkoral','spiderman_2017',
'sanctuary','retroreport','supermanandlois','intothenight','amosandandy','cleaner_2021',
'gameofthrones','angel_1960','tigtone','starwarsthebadbatch','barbara','astroboy_1980',
'secretcelebrityrenovation','entourage','tigerking','hex','intervention','futurama',
'allthequeensmen','chair','mulaney','mick','southside','conan_2010','starstruck',
'newadventuresofheman','10thingsihateaboutyou','theflash_2014','blueskies','bunkd',
'republicangangsters','whenhopecalls','intelligence_2020','heathers','lace',
'milliondollarlistingnewyork','baantjermysteries','legendsandlies','harshrealm','mynameisearl',
'wireless','beastmaster','movieshow','peopleofearth','crankyankers','geordieshore',
'band of brothers','rickygervaisshow','lizaondemand','bettyhuttonshow',
'mysterysciencetheater3000thereturn','atlanta','secretvalley','laschicasdecable',
'arthurandgeorge','garagesalemystery','24legacy','theamericans','parientesalafuerza',
'aaahhrealmonsters','strike','oa','dreamland','inhumans','casadepapel','legends',
'startreklowerdecks','bleakhouse_1985','fword_2017','nightwatch','mrsunshine','whatifdotdot',
'irvinewelshscrime','aaronstone','bosch','strangeangel','goodtrouble','tomorrowpeople_2013',
'vidasecretadoscasais','adventuresofthegalaxyrangers','queensgambit','walking   dead',
'hereandnow_2018','middle','viceprincipals','arrow','exosquad','hudsonandrex','lastdefense',
'greatestathomevideos','industry_2020','badgirlsclub','ironchefgauntlet','barry','janethevirgin',
'detail','tko','partnersinrhyme','hpi','beulahshow','majorcrimes','maninthehighcastle',
'burnnotice','bigtop','alftales','spacesdeepestsecrets','deadlygames_2020','vagrantqueen',
'stand','mom','marthasvineyardmysteries','staged','luckyman','oblongs','goodplace','shadowhunters',
'allaboutus','tonightshowstarringjimmyfallon','grahamnortonshow','fairfax','rbuk','canyouhearme',
'vinyl','summerhouse','alfresco','miracleworkers','americandreams','allnightlong',
'keepingupwiththekardashians','grownish','whowantstobeamillionaire','austinstories','biohackers',
'harperhouse','angelosepithemioushow','joepickett','whatshappeningnow','yokaiwatch',
'dirkgentlysholisticdetectiveagency_2016','fatethewinxsaga','imposters','creepedout',
'yellowjackets','emergency','mastersofsciencefiction','girls5eva','airline_2004','walker',
'intheflowwithaffioncrockett','deep state','castlevania','charliebrookersscreenwipe',
'dexter new blood','silk','littlelatewithlillysingh','bluethunder','jonathancreek',
'alteredcarbon','amazingraceaustralia','baileysofbalboa','dallas','allsaints','astronauts_2020',
'teslasdeathray','miracleworkers_2019','angietribeca','traitors','makinghistory','lastleg',
'buddyvsduff','the outsider','drewbarrymoreshow','northwoodslaw','alienated','gamespeopleplay_2019',
'knightfall','mightyboosh','murphybrown','godfriendedme','beast','patriotact','dailyshow',
'itsalwayssunnyinphiladelphia','letsstaytogether','showtrial','mrsamerica','shannarachronicles',
'3rdrockfromthesun','youmeandtheapocalypse','reverie','rootslesstraveled','blunder',
'teamosupremo','blackwhite','112263','deadstill','pollyandthezhuzhupets','blindjustice',
'shippingwars','abby','balderdashandpiffle','findingjoy','joemillionaireforricherorpoorer',
'perrymason','beingerica','golddivers','adventuresofshirleyholmes','shetland','codeblack',
'barbershop','league','caseagainstadnansyed','batterypark','pushing daisies','fastnloud',
'reba','leverage','freshofftheboat','flipped','clangers_2015','defending jacob',
'armandoiannuccishows','preachersdaughters','archer_1975','extant','nancydrew','solos',
'shotsfired','alaskagolddiggers','andywilliamsshow_1962','maverick','annika','babesinthewood',
'rugrats_2021','wheeloffortunecelebrity','blackstone','wrongmans','ohjeromeno','frequency',
'yolocrystalfantasy','deuce','truestory_2021','blanskysbeauties','frenchvillage','snowspider',
'bizarrefoodswithandrewzimmern','southpark','towerprep','cbstrike','startrekenterprise',
'mayansmc','inkpaperscissors','whiskeycavalier','onehundred','wishenpoof','kongkingoftheapes',
'scorpion','afterparty','imaydestroyyou','hauntingofblymanor','masterofnone','drifters',
'community','salvation','rush_2014','kevincanwait','madameblancmysteries','athomewiththebraithwaites',
'venturebrothers','stonewars','ranch','adam12','chase_2009','dragonsden','ateam',
'jerseyshorefamilyvacation','yukongold','blueheaven','velvetcoleccion','outrageousactsofscience',
'aroundtheworldin80plates','the flight attendant','actorsstudio','outlaws_2021','lazytown',
'deutschland 83','shadowplay','whiplash','mrsbrownsboys','the unit','glades','abovesuspicion',
'hellskitchen','serangoonroad','imsorry','bigtimerush','bayoubillionaires','winxsaga',
'catherinethegreat','bellevue','outsider_2020','undertaker','beingmaryjane','tothelake',
'aaaghitsthemrhellshow','alongfortheridewithdavidodoherty','cops','csicyber','sanctuary_2019',
'mysticons','v_2009','lodge49','brink','littlehouseontheprairie','blade','mercystreet',
'tedlasso','rightnowkapow','elcid_2020','sixmilliondollarman','unforgotten','luminaries',
'andjustlikethat','buffy','moonshiners','hollyhobbie','allaboutthewashingtons','howimetyourmother',
'qforce','whitney','armyshow','littlebigshotsforeveryoung','marthaspeaks','blueeyes','eddy',
'bobmartin','dirtyjohn','the mandalorian','partridgefamily','blooddrive','emeraldcity',
'americanhousewife','couplestherapy_2019','talesoftomorrow','smilf','cardinal','curseofoakisland',
'theboys','evilliveshere','houseofcards','drowning','dracula_2020','fivebedrooms','defiance',
'quiz','darknet','miketysonmysteries','mrswilson','bigwolfoncampus','knightrider_2008',
'ourflagmeansdeath','mickeymouseclubhouse','babybob','alaskawingmen','ringer','forthepeople',
'defenders_2017','anydreamwilldo','makeitpop','alienist','doingthemostwithphoeberobinson',
'abbys','russellhowardhour','extrememakeoverhomeedition','bitofado','allofus',
'bachelorpresentslistentoyourheart','sexeducation','akapablo','garagesquad','affair','newsroom',
'bigo','newyorktimespresents','believenothing','bluffcitylaw','clickbait','neighbors',
'animalpractice','nyrkki','halfhour','cursedfilms','fortheloveofjason','seaquest','mred',
'fearthewalkingdead','scijinks','chicagopartyaunt','30rock','tinstar','stepuphighwater',
'cloakanddagger','stitchers','americanchopperseniorvsjunior','ncishawaii','blueplanet',
'dallasandrobo','agent','dearwhitepeople','cleaninglady','48hoursncis','room104','winningtime',
'fortitude','breakoutkings','lifeinpieces','celebrityiou','latovegas','abbottelementary',
'jurassicworldcampcretaceous','office_uk','24hourstohellandback','believe','manfromuncle',
'spaceballs','maddogs_2016','lesnorton','incontempt','madamsecretary','bearcats',
'mastersoftheuniverserevelation','deadtome','loveisland','punkd_2020','dmz','condor',
'placetocallhome','lineofduty','alloallo','temptationisland','americanbakingcompetition',
'lucifer','chalkzone','absentia','killing','thewalkingdead','mcmafia','battleoftheweddingplanners',
'fairview','craith','goodgrief_2021','ghosthunters_2021','bobandrose','betterlatethannever',
'the killing','fawltytowers','yukonmen','blood','squeamishabout','aroundtheworldin80days_2009',
'policesquad','animalia','badsex','basketballwives','absolutepower','heights_2019',
'batmanthebraveandthebold','blandings','britainsgottalent','thearrow',
'msfishersmodernmurdermysteries','jimmykimmellive','cleopatrainspace','pitch','imdyinguphere',
'armstrongandmillershow','schooled','90dayfiance','mccarthys','newsradio','allymcbeal',
'severance','outcast','scenesfromamarriage','selfmade','dinodana','cupheadshow','iamthenight',
'inbestigators','speechless','thebanshee','forever_2018','great','bigbadworld_2013',
'onepunchman','amazingstories','beautifullife','jackryan','hunterxhunter','tower','occupied',
'knightsofthezodiac_2019','claws','onlyinamericawithlarrythecableguy','homesteadrescue',
'diggstown','suburra','homeandaway','fam','village','mysterycity','channelzero','cleopatra2525',
'americangangster','missscarletandtheduke','grandarmy','totalcontrol','westworld',
'kungfuthelegendcontinues','vikingsvalhalla','er','bestbakerinamerica','angelaseyes',
'drken','outsiders','shooter','mentendstu','cherrieswild','powerpuffgirls','dontlookdeeper',
'chicago med','crimescenekitchen','mad','thexfiles','krypton','happyvalley','catchacontractor',
'looneytunesshow','adventuresofpeteandpete','wutanganamericansaga','alaskapd',
'pennydreadfulcityofangels','bridge','prettylittleliars','hinterland','northernrescue',
'lowerdecks','guysgrocerygames','porter','lovevictor','generationkill','underbelly',
'weakestlink_2020','taboo_2017','marvelsinhumans','jakeandthefatman','teamgalaxy','catastrophe',
'bobnewhartshow','haltandcatchfire','atoz','honorstudentatmagichighschool','znation',
'earthfinalconflict','jackbennyprogram','ironchefamerica','seduced','americanhigh',
'housebroken','goodwitch','wrecked','firefly','attachments','mohawkgirls','blondie',
'waywardpines','modok','milliondollarmile','morningshowmysteries','lastkingdom',
'personofinterest','bull','realhousewivesofnewjersey','aliceithink','aeonflux',
'milomurphyslaw','aircrashinvestigation','secondchance_2016','betty','notsafewithnikkiglaser',
'whitelotus','prodigalson','twilightzone','swat_2017','minorityreport','magicaldoremi',
'granddesigns','show','americans','ashvsevildead','battlecreek','sweetbitter','stumptown','hawaii','graveyardcarz',
'howtowithjohnwilson','mysteriesoftheunexplained','carbonaroeffect','appletreeyard','hitmonkey','skylines','spellbinder',
'futureman','kellyclarksonshow','bill','vampirediaries','outpost','summerheightshigh','adamandjoeshow','bitoffryandlaurie',
'marriagebootcamprealitystars','inkmaster','streetoutlawsmemphis','pawpatrol','suits','areyoutherechelsea','mastersofsex',
'clientlist','jeopardy','trophywife','walkertexasranger','pamandtommy','ironhorse','cribs','expeditionunknown','littleellen',
'modsquad','reboottheguardiancode','redbandsociety','bachelorfather','colony_2016','elite','chance','willandgrace','politician',
'swagger','revolution','adventuresofhiramholliday','gintama','boldtype','darkmatter','departure','booker','greatestamericanhero',
'benson','50statesoffright','myknightandme','openallhours','intothedark','highmaintenance','dugdays','mythreesons',
'ballykissangel','snl','adventuresofblackbeauty','braxtonfamilyvalues','deathandnightingales','beyond','thickofit',
'unbelievable','offspring','deviousmaids','vice','unikitty','pearson','peoplemagazineinvestigates','batmantheanimatedseries',
'sortof','lasttangoinhalifax','messengers','nova','hungryghosts','trollhunters','inspectorwinter','fatherknowsbest',
'solaropposites','nevers','policerescue','amber','howtogetawaywithmurder','feelgood','murderville','killjoys','class',
'powerbookiighost','holeymoley','listentoyourheart','constantinecityofdemons','murdochmysteries','narcosmexico',
'feedthebeast','happytogether','alldogsgotoheaven','lovecraftcountry','raisedbywolves_2020','ourboys','shadesofblue',
'houseofpayne','aword','projectbluebook','eastwick','outsourced','greys anatomy','yogabbagabba','darkcrystalageofresistance',
'spykidsmissioncritical','dinersdriveinsanddives','streetoutlawsnoprepkings','safeharbour','aliennation','drbrain','accused',
'askrhodgilbert','alexinc','greatperformancesatthemet','secondjen','dangerforce','whatjusthappened','45revoluciones',
'whistleblower','orangeisthenewblack','walktheprank','elistone','detectives_ca','goldrush','complaintsdepartment',
'startrekvoyager','silicon valley','marriedatfirstsight','cid_2020','bewitched','mightyducksgamechangers','bette',
'iflovingyouiswrong','bigguyandrustytheboyrobot','thirdday','beinghuman','breakingamish','kateplus8','kalpennapprovesthismessage',
'whitefamous','anygivenwednesday','treadstone','doompatrol','nashville','belleandsebastian','pointpleasant','meetthefrasers',
'survivingrkelly','proveninnocent','harttoheart','magnumpi_2018','gossipgirl','afteryouvegone','threemoonsovermilford',
'bigfan','oc','anne','bellamyspeople','highanddry','americangods','wearemen','aquabatssupershow','interceptor','familymatters',
'coolkids','cominghome_us','everythingsgonnabeokay','schittscreek','austincitylimits','bungoustraydogs',
'bestshowintheworldprobably','allornothing','doogiekamealohamd','freshprinceofbelair','wickedtunanorthvssouth',
'familytime','americanvandal','idreamofjeannie','blackesmagic','finalspace','good girls','billandtedsexcellentadventures',
'muppets','youngsheldon','startup','worldonfire','madmen','bluelight','impastor','battlestargalactica_2003',
'sexlivesofcollegegirls','benders','new amsterdam','rockfordfiles','bobbysworld','911','mylifeismurder','intheheatofthenight',
'thatmitchellandwebblook','goodfight','teslafiles','sleepyhollow','alandaviesteenagerevolution','junkdrawermagicaladventures',
'blacklistredemption','crew_2021','marvelsagentsofshield','frankensteinchronicles','catch22','mindhunter','cowboybebop',
'fullfrontalwithsamanthabee','duchess','sanditon','elreynation','bigeasy','ausa','marcella','queereye','surface','raydonovan',
'scrubs','copper','smothered','notomorrow','dicktown','ninerealms','coldcase','blacklake','beforeigners','seal team','taboo',
'reedbetweenthelines','vow','californication','relic hunter','closer','icarly_2021','russiandoll','manhunt_2019','dimension404',
'capture','ellensgameofgames','smash','centurycity','perpetual grace ltd','gentlemanjack','aliensinamerica','yellowstone',
'impregnantand','hauntingofhillhouse','paradisehotel_2019','district','bethennygettingmarried','ashleypaigebikiniorbust',
'counterpart','myheroacademia','billions','atlantaexes','clarice','dominomasters','vanityfair','afterlife','getchristielove',
'cyberchase','goldrushdaveturinslostmine','apparitions','starwarsforcesofdestiny','enemywithin','plebs',
'mythicquestravensbanquet','bite','lasvegas','fixerupper','chicagomed','mybrilliantfriend','whatif','homesweethome','sonofzorn',
'mrd','anneofgreengables','lostroom','lovesick','allabouttheandersons','hundred','bringit','imagine','dumpingground','unabomber',
'temptationisland_2019','breakingnews','rake','blade_2012','originals','fortsalem','eightdaysthatmaderome','becomingus',
'walkingdead','timeaftertime','tylerperryshouseofpayne','better call saul','librarians','workaholics','legendoftheseeker',
'hercules','utopia','battledome','crashing_2017','motive','yonderland','stalker','conviction','barneymiller','shesgottahaveit',
'everybodyhateschris','csiny','whitewall','legojurassicworld','atlanticcrossing','josh','waroftheworlds_2019',
'thisisnothappening','dystopia','goodsam','holbycity','monk','wolfhall','shadowandbone','howardsend','ghostandmrsmuir',
'beatshazam','outcasts','moonbase8','porters','articulate','legendsoftomorrow','avengers_1999','powerrangers','oddcouple',
'gunsmoke','thevoice','the orville','allthesmallthings','schoolofrock','natureofthings','intothewildfrontier','glitch',
'game_2021','inspectorlewis','billandtedsexcellentadventures_anim','jellies','whoisamerica','manseekingwoman','quantico',
'firstresponderslive','bodyandsoul','blindedthosewhokill','wonderpets','aguadonkeys','2 broke girls','wyattcenacsproblemareas',
'cityonahill','beringseagoldundertheice','liseysstory','strangerthings','robbie','visions','the pretender','starwarsresistance',
'alfredhitchcockpresents','generalhospital','detectorists','highschoolmusicalthemusical','birdland',
'alarmfurcobra11dieautobahnpolizei','jetsons','special','highwaypatrol','qixl','bluecollartv','sabrina the teenage witch',
'curiousgeorge','agentcarter','audiencewith','unafamiliadediez','outlander','celebritywatchparty','fearfactor',
'qintothestorm','genlock','jojosbizarreadventure','alphas','kipoandtheageofwonderbeasts','theblacklist','aliensinthefamily_us',
'youngpope','residentalien','paintingwithjohn','hotincleveland','bigbrother_uk','workinmoms','lastweektonightwithjohnoliver',
'grandmashouse','allaboutgeorge','jailedabroad','salem','incrediblehulk','waco','breaking bad','adventuresofrintintin',
'sabrinatheteenagewitch','flashforward','head','ghosted','truthbetold_2019','stargateuniverse','chillingadventuresofsabrina',
'matildaandtheramsaybunch','thelegendofvoxmachina','ally','shameless_us','room101_2012','disenchantment','knick',
'whywomenkill','pretty little liars','halcyon','lonegunmen','dreamon','eyewitness','narutoshippuden','jimjefferiesshow',
'keepingfaith','airemergency','gameon_2020','godiegogo','legostarwarsthefreemakeradventures','ourcartoonpresident',
'barefootinthepark','billdanashow','wilwheatonproject','goodwife','stanleesluckyman','vwars','barkarma','reigntheconqueror',
'dorisdayshow','mosthaunted','batmanbeyond','othertwo','nextfoodnetworkstar','ziwe','grandtour','daaligshow_uk','baretta',
'wisdomofthecrowd','secretlifeofcouples','greenacres','younghercules','deepstate','fantasyisland_2021','insideno9','thecloser',
'son','firstwave','patrickstarshow','qi','izombie','flash_2014','magnificentseven','alltherightmoves','flaked','almostfamily',
'peterkayscarshare','downtonabbey','quarry','billytheexterminator','fastlayne','camping','fades','bluemurder',
'jayceandthewheeledwarriors','skylandersacademy','bigbadworld','battlebots','siren','terminatorthesarahconnorchronicles',
'bitchinrides','babytalk','sunrecords','whatonearth','klondike_2014','big','heroesreborn','chambers_2019','betheboss',
'power','americancrimestory','astimegoesby','crown','castlerock','big sky','cosmosaspacetimeodyssey','barefootcontessa',
'manhattanlovestory','ravensbanquet','watchwhathappenslive','academy','triggerpoint','firstfamily','donttrustthebinapartment23',
'askharriet','faking it','littlebirds','mchalesnavy','queenofthesouth','mobwives','verysecretservice','afterlife_2019','six',
'mysteriesdecoded','emilyinparis','mash','theorville','youngjustice','wouldilietoyou','animalkingdom','the sopranos','outgrown','allsouls','twobrokegirls','guardiansofthegalaxy','mary','investigation','rutherfordfalls','robbeckettsundeniable','babes','blacklightning','coronationstreet','mysteryroad','terror','blacknarcissus','allinthefamily','heartbeat_2016','primevalnewworld','profit_2013','shakespeareandhathaway','deutschland83','bigbangtheory','findingcarter','worstcooksinamerica','barterkings','stranger things','outsiders_2016','allingoodfaith','realityz','superpumped','arliss','proudfamilylouderandprouder','prettyhardcases','bernardswatch','9jkl','screamqueens','adamcarollaproject','mommanamedmesheriff','brunettimysteries','puregenius','twoguysandagirl','weekendupdatethursday','martiallaw','aceofwands','teenwolf','justified','geteven','newadventuresofcharliechan','sailormoon','watchmen','restaurantimpossible','memyselfandi','witnesses','battleofthenetworkstars_1976','hollywoodmedium','utopia_2020','loudestvoice','animalfaceoff','benstillershow','brave','mythbustersjr','mostshocking','bloods','nowhereboys','savagebuilds','africa','mylittlepony','fleshandblood_2020','spy','teenagebountyhunters','ares','badblood','sally4ever','unreal','lawman','warehouse13','nine','simpsons','haven','gentefied','ering','donnielovesjenny','bordertown_2016','bachelor','lastog','livingandthedead','tribal','greenhouseacademy','handmaidstale','mysteriesoftheabandoned','salamander','blackscorpion','scandal','baron','iamjazz','pennyworth','sesamestreet','emergence','allamericangirl','bastardexecutioner','taken','billnyesavestheworld','invincible','sleepercell','dilbert','mountainmen','doomsdaybrothers','bedforddiaries','bigrichtexas','comedyplayhouse','midnightgospel','animaniacs_2020','quincy','arnie','intruders','sarahjaneadventures','threshold','ben10ultimatealien','royalflyingdoctorservice','manfromatlantis','chi','eureka','doublecross','fairlyoddparents','fourweddingsandafuneral','bureauofmagicalthings','houseofgames','threatmatrix','lastship','secretsshekeeps','deadlywomen','notgoingout','anthonybourdainnoreservations','family_2016','nashbridges','wire','tellmeastory','paranoid','blackmonday','ghostwhisperer','mozartinthejungle','sealab2021','casualty','jamestown','bombpatrolafghanistan','dixpourcent','applesway','junkyardwars','modernfamily','assistedliving','legacy','underthevines','trustme_uk','betterthanus','lukecage','team','awesomes','cliffordthebigreddog','arresteddevelopment','bluebloods','littleamerica','bigtimeinhollywoodfl','applepie','asif_us','moodys','paradiserun','craigofthecreek','his dark materials','smallaxe','berrengers','bighouse_2004','badgirls','hotdate','semidetached','castle','spiral','younger','barbarycoast','billnyethescienceguy','seriesofunfortunateevents','trippingtherift','the lone gunmen','goodlordbird','alzheimersproject','heman_1983','youretheworst','xenawarriorprincess','killercamp','cooperbarrettsguidetosurvivinglife','bull_2016','celebrityfamilyfeud','lovefraud','gildedage','helix','dufftakesthecake','wynonnaearp','goon','sceneofthecrime','colbertreport','closetome','ozark','blacksummer','american dad','thundermans','empire_2015','beavisandbutthead','evermoor','queensugar','roswellnewmexico','diaryofafuturepresident','unxplained','thingaboutpam','lineup','amishinthecity','hunted','outmatched','southwesterlies','dig','okavango','crashing','weekly','bionicwoman','hellonwheels','antigone34','antiquesroadshow','betterthings','colony','punisher','breakingbad','americandreamer','sickofit','babylon5','the good fight','transporter','trip','manhattan','strongmedicine','dopesick','onebighappy','axios','the genetic detective','hisdarkmaterials','the simpsons','galavant','apollogauntlet','carnivale','nightmanager','flash','siemprebruja','aliassmithandjones','fbi_2018','alienistangelofdarkness','pvalley','allontheline','runaways','fbimostwanted','legendsofthehiddentemple','criminal minds','passage','borderline','wanderlust','dynasty_2017','travelers','gobigshow','powerless','callyourmother','littlevoice','supergirl','vida','mindofherbertclunkerdunk','wethotamericansummer','librarians_2014','americancrime','realtimewithbillmaher','attackontitan','bignate','onbecomingagodincentralflorida','goeswrongshow','expanse','baddielandskinnerunplanned','dominion','quacks','wings','amishmafia','strays','kingdom_2019','Boys','bleakhouse_1959','macgruber','dcibanks','wall','deep_2015','lockdown','valleyoftears','cannonball_2020','hogansheroes','otherone','australianidol','awake','mriglesias','funkycops','realhousewivesofnewyorkcity','fauda','geneticdetective','todaysspecial','problemwithjonstewart','bonanza','ithinkyoushouldleavewithtimrobinson','ravenshome','loomingtower','ben10alienforce','devs','sherlock','lateshowwithstephencolbert','orville','talkingheads_2020','queens','crossinglines','angie','fairlylegal','wahlburgers','octoberfaction','badjudge','coldcasefiles_2017','the handmaids tale','lostinspace','murderin','alexeisaylesstuff','poldark','inspectors','lost','cradletograve','trust','lightasafeather','deadwaterfell','chasingclassiccars','americaslosttreasures','adventuresofdonquick','beautifulpeople','ancientsbehavingbadly','perfectharmony','battlestargalactica_1978','boomers','alfredhitchcockhour','rifleman','badults','arrangement','sixfeetunder','anotherperiod','wolfblood','leftovers','novasciencenow','boyband','reacher','crazyexgirlfriend','nikita','renegade','newgirl','wildbill','mosaic','anna','beingeileen','beggarsandchoosers','hawaiifiveo','commissairemagellan','survivingjack','cantervilleghost','toooldtodieyoung','kin','charite','talesofthecity_2019','allrise','astroboy','banggoesthetheory','americangladiators_1989','saddleclub','odyssey_2015','xfiles','whokilledsara','adventuresofwilliamtell','bandofbrothers','tallboyz','detour','bangedupabroad','beetlejuice','birthdayboys','awkwafinaisnorafromqueens','temoins','titus','magpiemurders','girlmeetsworld','mayor','onelanebridge','royalties','alanbennettstalkingheads','hardknocks','thegoodkarmahospital','oddsquad','sense8','patrickmelrose','vikings','topchef','taketwo','cybergirl','office_us','threescompany','americanguns','marriedwithchildren','stripped','arrestingbehavior','superiordonuts','lovedeathandrobots','pictureperfectmysteries','armstrongandmiller_tv','bob','startrekdiscovery','rudetube','birdsofafeather','inventinganna','blstryker','trainingday','mosquitocoast','doubt','ajandthequeen','miraculous','franklinandbash','northwater','fakingit','twenties','taskmaster','criminalminds','holidaybakingchampionship','dashandlily','alfredhitchcockpresents_1985','behindthemusic','girlinthewoods','deceived','tumbleleaf','fronterawithpatijinich','defyinggravity','lasfinest','mtvcribs','outlier','game','goldengirls','angelinaballerina','grinder','historysgreatestmysteries','humantarget_2010','junglejim','houseoflies','bigpicture','cheer_2020','bionicwoman_2007','thosewhokilltrappedbythedarkness','mydadtherockstar','timeless','pov','1600penn','hollywoodgamenight','endofthefingworld','reckless','fullmetalalchemistbrotherhood','differentworld','auctionkings','anthonyant','restaurantstakeout','following','americasnextgreatrestaurant','forged in fire','lethalweapon','iamnotokaywiththis','deadofsummer','loisandclark','bedlam','aquila','crossing','thecrown','goldrushparkerstrail','indebted','cowboybebop_2021','wanteddeadoralive','childsupport','guilt_2019','shatneila','blackmirror','bluemountainstate','genius_2017','forensicfiles','agathachristiespartnersincrime','bloodline','blacksails','davincisdemons','bobsburgers','flowers','underground','blacklist','wheelerdealers','hitandrun','feud','animaniacs','hauntedhathaways','banshee','andromeda','xfactor_uk','mars','inspectormontalbano','beautyandthegeek','blessthishouse_uk','topboy','sorryforyourloss','allgasandgaiters','siliconvalley','atmidnight','first','dominioncreek','madeinheaven','mcmillions','americasmostwanted','cleverman','bluestone42','fatherhood','biglittlelies','run','carter','mastersofmyth','bannedintheuk','beefhouse','champions_2018','made for love','ncislosangeles','americandad','chucky','littlefireseverywhere','cardsharks','greysanatomy','councilofdads','drstone','coldfeet_uk','foodtastic','stargateorigins','darkmatters','millionlittlethings','landscapers','justaddmagicmysterycity','gogglebox','bigmouth','middlemostpost','mainecabinmasters','whatwouldyoudo','kidnapped','stromberg','thosewhocant','homemovies','deathinparadise','badeducation','umbrellaacademy','onlyconnect','pushingdaisies','blueheelers','arseniohallshow','unite42','endeavour','chernobyl','backtothegrind','fallingskies','badmothers','walkingdeadworldbeyond','mandalorian','batwoman','chickens','mixology','duesouth','trigonometry','pen15','birch','airplanerepo','southland','origin','normalpeople','bigc','premise','inplainsight','celebritybigbrother','aboutaboy','americangrit','amazingspiderman','batesmotel','press','goodkarmahospital','bloodlettingandmiraculouscures','ordinaryjoe','justaddmagic','howtheuniverseworks','bodies','undercoverboss','bettywhiteshow','woke','anchorwoman','tabularasa','kylexy','dont','lexx','secretcity','babyblues','morningshow','primal','itcrowd','strikeback','troppo','tomgreenlive','waterlooroad','spongebob squarepants','cantcopewontcope','imacelebritygetmeoutofhere','annalee','babylon','wuassassins','aliennewsdesk','gone','engrenages','dotadragonsblood','angelstreet','camplakebottom','doctors','dancingwiththestarsjuniors','y1883','reservationdogs','hollywood','antagonists','bigday','iknowthismuchistrue','alone','arabianknights','peakyblinders','robotchicken','lifeofkylie','henryfordsinnovationnation','homeeconomics','peepshow','blackstar','supernaturalacademy','aliasgrace','ncisneworleans','dailyshowwithtrevornoah','bigger','riseoftheteenagemutantninjaturtles','mrrobot','agency_2007','falconandthewintersoldier','accidentallyonpurpose','beyondchance','octonauts','happydays','airdisasters','act','you','heist_2018','clubdecuervos','singleparents','moonknight','grimm','specialunit2','howtolookgoodnakeduk2020','betweentwoworlds','deadfiles','amazingrace','gotham','ghosthunters','historyofhorror','conners','banacek','inwiththeflynns','astoldbyginger','challenge','bloom','alphascorpio','asif_uk','kimsconvenience','clem','outsider','charmed_2018','thegrandtour','60minutes','onlymurdersinthebuilding','carolssecondact','familygamefight','bigbiggerbiggest','warrior','ghostandmollymcgee','reinadelsur','beast_us','annedroids','cheat','harleyquinn','derrygirls','eden_au','choir','hapandleonard','coopandcamiasktheworld','sunnyside','bakerandthebeauty','belgravia','doctorwho','proposal','goldrushwhitewater','pembrokeshiremurders','onedayatatime_2017','rookies','tonightshow','archer','brothervsbrother','supernatural','tinyprettythings','worstbakersinamerica','pact','teentitans','andygriffithshow','defendingjacob','nanny911','britannia','knightrider','afterhenry','3percent','lastword','zoeysextraordinaryplaylist','aforandromeda','ifeelbad','addamsfamily','troublewithmaggiecole','detectiveconan','wrightway','croodsfamilytree','ghostadventures','billy','decker','sharp objects','24','wolfboyandtheeverythingfactory','controlz','oneofusislying','rita','sonsofguns','instinct','hardsun','jurassicworld','patriot','bostonlegal','aktamanniskor','240robert','royalhistorysbiggestfibswithlucyworsley','londonkills','americastestkitchen','whodoyouthinkyouare','joeperatalkswithyou','grantchester','reno911','almostroyal','dualsurvival','discoveryofwitches','onceuponatimeinwonderland','littlewomenla','ryanhansensolvescrimesontelevision','inspectorandthesea','adventuresofrockyandbullwinkle','ashleesimpsonshow','the walking dead','monsterland','babylooneytunes','agentsofshield','battleofthenetworkstars','kidcosmic','class_2016','amicageniale','jonathanrossshow','handmaids tale','jordskott','lockeandkey','philipkdickselectricdreams','bestofthewest','everybodylovesraymond','harlots','bluemurder_2003','8outof10catsdoescountdown','withlove','matchgame','americasbigdeal','utopia_au','warren','whoselineisitanyway_us','searchparty','goodgirls','cosbyshow','winterroadrescue']
