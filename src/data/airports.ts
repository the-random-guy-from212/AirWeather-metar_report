import { Airport } from '../types';

export const airports: Airport[] = [
  // Moroccan airports
  {
    id: '1',
    name: 'Mohammed V International Airport',
    icao: 'GMMN',
    iata: 'CMN',
    city: 'Casablanca',
    country: 'Morocco',
    latitude: 33.3675,
    longitude: -7.5900
  },
  {
    id: '2',
    name: 'Marrakesh Menara Airport',
    icao: 'GMMX',
    iata: 'RAK',
    city: 'Marrakesh',
    country: 'Morocco',
    latitude: 31.6069,
    longitude: -8.0363
  },
  {
    id: '3',
    name: 'Rabat–Salé Airport',
    icao: 'GMME',
    iata: 'RBA',
    city: 'Rabat',
    country: 'Morocco',
    latitude: 34.0515,
    longitude: -6.7515
  },
  {
    id: '4',
    name: 'Fès–Saïs Airport',
    icao: 'GMFF',
    iata: 'FEZ',
    city: 'Fès',
    country: 'Morocco',
    latitude: 33.9272,
    longitude: -4.9778
  },
  {
    id: '5',
    name: 'Tangier Ibn Battouta Airport',
    icao: 'GMTT',
    iata: 'TNG',
    city: 'Tangier',
    country: 'Morocco',
    latitude: 35.7269,
    longitude: -5.9168
  },
  {
    id: '6',
    name: 'Agadir–Al Massira Airport',
    icao: 'GMAD',
    iata: 'AGA',
    city: 'Agadir',
    country: 'Morocco',
    latitude: 30.3250,
    longitude: -9.4131
  },
  {
    id: '7',
    name: 'Oujda Angads Airport',
    icao: 'GMFO',
    iata: 'OUD',
    city: 'Oujda',
    country: 'Morocco',
    latitude: 34.7872,
    longitude: -1.9239
  },
  {
    id: '13',
    name: 'Nador International Airport',
    icao: 'GMMW',
    iata: 'NDR',
    city: 'Nador',
    country: 'Morocco',
    latitude: 34.9888,
    longitude: -3.0280
  },
  {
    id: '14',
    name: 'Ouarzazate Airport',
    icao: 'GMMZ',
    iata: 'OZZ',
    city: 'Ouarzazate',
    country: 'Morocco',
    latitude: 30.9391,
    longitude: -6.9094
  },
  {
    id: '15',
    name: 'Essaouira-Mogador Airport',
    icao: 'GMMI',
    iata: 'ESU',
    city: 'Essaouira',
    country: 'Morocco',
    latitude: 31.3969,
    longitude: -9.6817
  },
  {
    id: '16',
    name: 'Tétouan Sania Ramel Airport',
    icao: 'GMTN',
    iata: 'TTU',
    city: 'Tétouan',
    country: 'Morocco',
    latitude: 35.5944,
    longitude: -5.3200
  },
  {
    id: '17',
    name: 'Al Hoceima Cherif Al Idrissi Airport',
    icao: 'GMTA',
    iata: 'AHU',
    city: 'Al Hoceima',
    country: 'Morocco',
    latitude: 35.1777,
    longitude: -3.8394
  },
  {
    id: '18',
    name: 'Dakhla Airport',
    icao: 'GMMH',
    iata: 'VIL',
    city: 'Dakhla',
    country: 'Morocco',
    latitude: 23.7183,
    longitude: -15.9322
  },
  {
    id: '19',
    name: 'Laayoune Hassan I Airport',
    icao: 'GMML',
    iata: 'EUN',
    city: 'Laayoune',
    country: 'Morocco',
    latitude: 27.1517,
    longitude: -13.2192
  },
  {
    id: '20',
    name: 'Errachidia Moulay Ali Cherif Airport',
    icao: 'GMFK',
    iata: 'ERH',
    city: 'Errachidia',
    country: 'Morocco',
    latitude: 31.9475,
    longitude: -4.3983
  },
  {
    id: '21',
    name: 'Beni Mellal Airport',
    icao: 'GMMD',
    iata: 'BEM',
    city: 'Beni Mellal',
    country: 'Morocco',
    latitude: 32.4017,
    longitude: -6.3158
  },
  // International airports - Europe
  {
    id: '22',
    name: 'Heathrow Airport',
    icao: 'EGLL',
    iata: 'LHR',
    city: 'London',
    country: 'United Kingdom',
    latitude: 51.4700,
    longitude: -0.4543
  },
  {
    id: '23',
    name: 'Charles de Gaulle Airport',
    icao: 'LFPG',
    iata: 'CDG',
    city: 'Paris',
    country: 'France',
    latitude: 49.0097,
    longitude: 2.5479
  },
  {
    id: '24',
    name: 'Adolfo Suárez Madrid–Barajas Airport',
    icao: 'LEMD',
    iata: 'MAD',
    city: 'Madrid',
    country: 'Spain',
    latitude: 40.4983,
    longitude: -3.5676
  },
  {
    id: '25',
    name: 'Amsterdam Airport Schiphol',
    icao: 'EHAM',
    iata: 'AMS',
    city: 'Amsterdam',
    country: 'Netherlands',
    latitude: 52.3086,
    longitude: 4.7639
  },
  {
    id: '26',
    name: 'Frankfurt Airport',
    icao: 'EDDF',
    iata: 'FRA',
    city: 'Frankfurt',
    country: 'Germany',
    latitude: 50.0379,
    longitude: 8.5622
  },
  {
    id: '27',
    name: 'Istanbul Airport',
    icao: 'LTFM',
    iata: 'IST',
    city: 'Istanbul',
    country: 'Turkey',
    latitude: 41.2609,
    longitude: 28.7414
  },
  {
    id: '32',
    name: 'Rome Fiumicino Airport',
    icao: 'LIRF',
    iata: 'FCO',
    city: 'Rome',
    country: 'Italy',
    latitude: 41.8003,
    longitude: 12.2389
  },
  {
    id: '33',
    name: 'Barcelona–El Prat Airport',
    icao: 'LEBL',
    iata: 'BCN',
    city: 'Barcelona',
    country: 'Spain',
    latitude: 41.2971,
    longitude: 2.0785
  },
  {
    id: '34',
    name: 'Munich Airport',
    icao: 'EDDM',
    iata: 'MUC',
    city: 'Munich',
    country: 'Germany',
    latitude: 48.3538,
    longitude: 11.7861
  },
  {
    id: '35',
    name: 'Vienna International Airport',
    icao: 'LOWW',
    iata: 'VIE',
    city: 'Vienna',
    country: 'Austria',
    latitude: 48.1103,
    longitude: 16.5700
  },
  {
    id: '36',
    name: 'Zürich Airport',
    icao: 'LSZH',
    iata: 'ZRH',
    city: 'Zürich',
    country: 'Switzerland',
    latitude: 47.4647,
    longitude: 8.5492
  },
  {
    id: '37',
    name: 'Copenhagen Airport',
    icao: 'EKCH',
    iata: 'CPH',
    city: 'Copenhagen',
    country: 'Denmark',
    latitude: 55.6180,
    longitude: 12.6560
  },
  {
    id: '38',
    name: 'Dublin Airport',
    icao: 'EIDW',
    iata: 'DUB',
    city: 'Dublin',
    country: 'Ireland',
    latitude: 53.4213,
    longitude: -6.2701
  },
  {
    id: '39',
    name: 'Lisbon Airport',
    icao: 'LPPT',
    iata: 'LIS',
    city: 'Lisbon',
    country: 'Portugal',
    latitude: 38.7813,
    longitude: -9.1359
  },
  {
    id: '40',
    name: 'Athens International Airport',
    icao: 'LGAV',
    iata: 'ATH',
    city: 'Athens',
    country: 'Greece',
    latitude: 37.9364,
    longitude: 23.9445
  },
  {
    id: '41',
    name: 'Brussels Airport',
    icao: 'EBBR',
    iata: 'BRU',
    city: 'Brussels',
    country: 'Belgium',
    latitude: 50.9014,
    longitude: 4.4844
  },
  // International airports - North America
  {
    id: '10',
    name: 'John F. Kennedy International Airport',
    icao: 'KJFK',
    iata: 'JFK',
    city: 'New York',
    country: 'United States',
    latitude: 40.6413,
    longitude: -73.7781
  },
  {
    id: '30',
    name: 'Montréal–Pierre Elliott Trudeau International Airport',
    icao: 'CYUL',
    iata: 'YUL',
    city: 'Montreal',
    country: 'Canada',
    latitude: 45.4706,
    longitude: -73.7408
  },
  {
    id: '42',
    name: 'Los Angeles International Airport',
    icao: 'KLAX',
    iata: 'LAX',
    city: 'Los Angeles',
    country: 'United States',
    latitude: 33.9416,
    longitude: -118.4085
  },
  {
    id: '43',
    name: 'O\'Hare International Airport',
    icao: 'KORD',
    iata: 'ORD',
    city: 'Chicago',
    country: 'United States',
    latitude: 41.9786,
    longitude: -87.9048
  },
  {
    id: '44',
    name: 'Hartsfield–Jackson Atlanta International Airport',
    icao: 'KATL',
    iata: 'ATL',
    city: 'Atlanta',
    country: 'United States',
    latitude: 33.6407,
    longitude: -84.4277
  },
  {
    id: '45',
    name: 'San Francisco International Airport',
    icao: 'KSFO',
    iata: 'SFO',
    city: 'San Francisco',
    country: 'United States',
    latitude: 37.6213,
    longitude: -122.3790
  },
  {
    id: '46',
    name: 'Toronto Pearson International Airport',
    icao: 'CYYZ',
    iata: 'YYZ',
    city: 'Toronto',
    country: 'Canada',
    latitude: 43.6777,
    longitude: -79.6248
  },
  {
    id: '47',
    name: 'Denver International Airport',
    icao: 'KDEN',
    iata: 'DEN',
    city: 'Denver',
    country: 'United States',
    latitude: 39.8561,
    longitude: -104.6737
  },
  {
    id: '48',
    name: 'Miami International Airport',
    icao: 'KMIA',
    iata: 'MIA',
    city: 'Miami',
    country: 'United States',
    latitude: 25.7951,
    longitude: -80.2771
  },
  {
    id: '49',
    name: 'Mexico City International Airport',
    icao: 'MMMX',
    iata: 'MEX',
    city: 'Mexico City',
    country: 'Mexico',
    latitude: 19.4363,
    longitude: -99.0721
  },
  {
    id: '50',
    name: 'Vancouver International Airport',
    icao: 'CYVR',
    iata: 'YVR',
    city: 'Vancouver',
    country: 'Canada',
    latitude: 49.1967,
    longitude: -123.1815
  },
  {
    id: '51',
    name: 'Es-Smara Airport',
    icao: 'GMMA',
    iata: 'SMW',
    city: 'Smara',
    country: 'Morocco',
    latitude: 26.731667,
    longitude: -11.684444
  },
  // International airports - Asia
  {
    id: '52',
    name: 'Dubai International Airport',
    icao: 'OMDB',
    iata: 'DXB',
    city: 'Dubai',
    country: 'United Arab Emirates',
    latitude: 25.2528,
    longitude: 55.3644
  },
  {
    id: '53',
    name: 'Singapore Changi Airport',
    icao: 'WSSS',
    iata: 'SIN',
    city: 'Singapore',
    country: 'Singapore',
    latitude: 1.3644,
    longitude: 103.9915
  },
  {
    id: '54',
    name: 'Tokyo Haneda Airport',
    icao: 'RJTT',
    iata: 'HND',
    city: 'Tokyo',
    country: 'Japan',
    latitude: 35.5494,
    longitude: 139.7798
  },
  {
    id: '55',
    name: 'Cairo International Airport',
    icao: 'HECA',
    iata: 'CAI',
    city: 'Cairo',
    country: 'Egypt',
    latitude: 30.1219,
    longitude: 31.4056
  },
  {
    id: '56',
    name: 'Incheon International Airport',
    icao: 'RKSI',
    iata: 'ICN',
    city: 'Seoul',
    country: 'South Korea',
    latitude: 37.4602,
    longitude: 126.4407
  },
  {
    id: '57',
    name: 'Beijing Capital International Airport',
    icao: 'ZBAA',
    iata: 'PEK',
    city: 'Beijing',
    country: 'China',
    latitude: 40.0799,
    longitude: 116.6031
  },
  {
    id: '58',
    name: 'Hong Kong International Airport',
    icao: 'VHHH',
    iata: 'HKG',
    city: 'Hong Kong',
    country: 'China',
    latitude: 22.3080,
    longitude: 113.9185
  },
  {
    id: '59',
    name: 'Narita International Airport',
    icao: 'RJAA',
    iata: 'NRT',
    city: 'Tokyo',
    country: 'Japan',
    latitude: 35.7647,
    longitude: 140.3864
  },
  {
    id: '60',
    name: 'Indira Gandhi International Airport',
    icao: 'VIDP',
    iata: 'DEL',
    city: 'Delhi',
    country: 'India',
    latitude: 28.5562,
    longitude: 77.1000
  },
  {
    id: '61',
    name: 'Shanghai Pudong International Airport',
    icao: 'ZSPD',
    iata: 'PVG',
    city: 'Shanghai',
    country: 'China',
    latitude: 31.1443,
    longitude: 121.8083
  },
  {
    id: '62',
    name: 'Suvarnabhumi Airport',
    icao: 'VTBS',
    iata: 'BKK',
    city: 'Bangkok',
    country: 'Thailand',
    latitude: 13.6900,
    longitude: 100.7501
  },
  {
    id: '63',
    name: 'Kuala Lumpur International Airport',
    icao: 'WMKK',
    iata: 'KUL',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    latitude: 2.7456,
    longitude: 101.7099
  },
  {
    id: '64',
    name: 'Chhatrapati Shivaji Maharaj International Airport',
    icao: 'VABB',
    iata: 'BOM',
    city: 'Mumbai',
    country: 'India',
    latitude: 19.0896,
    longitude: 72.8656
  },
  {
    id: '65',
    name: 'Taiwan Taoyuan International Airport',
    icao: 'RCTP',
    iata: 'TPE',
    city: 'Taipei',
    country: 'Taiwan',
    latitude: 25.0797,
    longitude: 121.2342
  },
  {
    id: '66',
    name: 'Hamad International Airport',
    icao: 'OTHH',
    iata: 'DOH',
    city: 'Doha',
    country: 'Qatar',
    latitude: 25.2609,
    longitude: 51.6138
  },
  {
    id: '67',
    name: 'King Abdulaziz International Airport',
    icao: 'OEJN',
    iata: 'JED',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    latitude: 21.6790,
    longitude: 39.1572
  },
  // International airports - Oceania
  {
    id: '68',
    name: 'Sydney Kingsford Smith Airport',
    icao: 'YSSY',
    iata: 'SYD',
    city: 'Sydney',
    country: 'Australia',
    latitude: -33.9399,
    longitude: 151.1753
  },
  {
    id: '69',
    name: 'Melbourne Airport',
    icao: 'YMML',
    iata: 'MEL',
    city: 'Melbourne',
    country: 'Australia',
    latitude: -37.6690,
    longitude: 144.8410
  },
  {
    id: '70',
    name: 'Auckland Airport',
    icao: 'NZAA',
    iata: 'AKL',
    city: 'Auckland',
    country: 'New Zealand',
    latitude: -37.0082,
    longitude: 174.7850
  },
  {
    id: '71',
    name: 'Brisbane Airport',
    icao: 'YBBN',
    iata: 'BNE',
    city: 'Brisbane',
    country: 'Australia',
    latitude: -27.3942,
    longitude: 153.1218
  },
  // International airports - South America
  {
    id: '72',
    name: 'São Paulo–Guarulhos International Airport',
    icao: 'SBGR',
    iata: 'GRU',
    city: 'São Paulo',
    country: 'Brazil',
    latitude: -23.4356,
    longitude: -46.4731
  },
  {
    id: '73',
    name: 'El Dorado International Airport',
    icao: 'SKBO',
    iata: 'BOG',
    city: 'Bogotá',
    country: 'Colombia',
    latitude: 4.7016,
    longitude: -74.1469
  },
  {
    id: '74',
    name: 'Jorge Chávez International Airport',
    icao: 'SPJC',
    iata: 'LIM',
    city: 'Lima',
    country: 'Peru',
    latitude: -12.0219,
    longitude: -77.1143
  },
  {
    id: '75',
    name: 'Santiago International Airport',
    icao: 'SCEL',
    iata: 'SCL',
    city: 'Santiago',
    country: 'Chile',
    latitude: -33.3927,
    longitude: -70.7856
  },
  {
    id: '76',
    name: 'Ministro Pistarini International Airport',
    icao: 'SAEZ',
    iata: 'EZE',
    city: 'Buenos Aires',
    country: 'Argentina',
    latitude: -34.8222,
    longitude: -58.5358
  },
  // International airports - Africa
  {
    id: '77',
    name: 'Jomo Kenyatta International Airport',
    icao: 'HKJK',
    iata: 'NBO',
    city: 'Nairobi',
    country: 'Kenya',
    latitude: -1.3192,
    longitude: 36.9278
  },
  {
    id: '78',
    name: 'O.R. Tambo International Airport',
    icao: 'FAOR',
    iata: 'JNB',
    city: 'Johannesburg',
    country: 'South Africa',
    latitude: -26.1392,
    longitude: 28.2460
  },
  {
    id: '79',
    name: 'Cape Town International Airport',
    icao: 'FACT',
    iata: 'CPT',
    city: 'Cape Town',
    country: 'South Africa',
    latitude: -33.9649,
    longitude: 18.6027
  },
  {
    id: '80',
    name: 'Addis Ababa Bole International Airport',
    icao: 'HAAB',
    iata: 'ADD',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    latitude: 8.9778,
    longitude: 38.7993
  },
  {
    id: '81',
    name: 'Murtala Muhammed International Airport',
    icao: 'DNMM',
    iata: 'LOS',
    city: 'Lagos',
    country: 'Nigeria',
    latitude: 6.5774,
    longitude: 3.3214
  },
  {
    id: '82',
    name: 'Tunis Carthage International Airport',
    icao: 'DTTA',
    iata: 'TUN',
    city: 'Tunis',
    country: 'Tunisia',
    latitude: 36.8515,
    longitude: 10.2272
  },
  {
    id: '83',
    name: 'Houari Boumediene Airport',
    icao: 'DAAG',
    iata: 'ALG',
    city: 'Algiers',
    country: 'Algeria',
    latitude: 36.6910,
    longitude: 3.2153
  },
  {
    id: '84',
    name: 'King Khalid International Airport',
    icao: 'OERK',
    iata: 'RUH',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    latitude: 24.9578,
    longitude: 46.6992
  },
  {
    id: '85',
    name: 'Abu Dhabi International Airport',
    icao: 'OMAA',
    iata: 'AUH',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    latitude: 24.4331,
    longitude: 54.6511
  },
  {
    id: '86',
    name: 'Ben Gurion Airport',
    icao: 'LLBG',
    iata: 'TLV',
    city: 'Tel Aviv',
    country: 'Israel',
    latitude: 32.0114,
    longitude: 34.8867
  },
  // Asia
  {
    id: '87',
    name: 'Kansai International Airport',
    icao: 'RJBB',
    iata: 'KIX',
    city: 'Osaka',
    country: 'Japan',
    latitude: 34.4342,
    longitude: 135.2233
  },
  {
    id: '88',
    name: 'Guangzhou Baiyun International Airport',
    icao: 'ZGGG',
    iata: 'CAN',
    city: 'Guangzhou',
    country: 'China',
    latitude: 23.3959,
    longitude: 113.3080
  },
  {
    id: '89',
    name: 'Soekarno–Hatta International Airport',
    icao: 'WIII',
    iata: 'CGK',
    city: 'Jakarta',
    country: 'Indonesia',
    latitude: -6.1256,
    longitude: 106.6558
  },
  {
    id: '90',
    name: 'Ninoy Aquino International Airport',
    icao: 'RPLL',
    iata: 'MNL',
    city: 'Manila',
    country: 'Philippines',
    latitude: 14.5086,
    longitude: 121.0197
  },
  // Europe
  {
    id: '91',
    name: 'Leonardo da Vinci–Fiumicino Airport',
    icao: 'LIRF',
    iata: 'FCO',
    city: 'Rome',
    country: 'Italy',
    latitude: 41.8003,
    longitude: 12.2389
  },
  {
    id: '92',
    name: 'Stockholm Arlanda Airport',
    icao: 'ESSA',
    iata: 'ARN',
    city: 'Stockholm',
    country: 'Sweden',
    latitude: 59.6519,
    longitude: 17.9186
  },
  {
    id: '93',
    name: 'Helsinki Airport',
    icao: 'EFHK',
    iata: 'HEL',
    city: 'Helsinki',
    country: 'Finland',
    latitude: 60.3183,
    longitude: 24.9497
  },
  {
    id: '102',
    name: 'Warsaw Chopin Airport',
    icao: 'EPWA',
    iata: 'WAW',
    city: 'Warsaw',
    country: 'Poland',
    latitude: 52.1672,
    longitude: 20.9679
  },
  // North America
  {
    id: '103',
    name: 'Dallas/Fort Worth International Airport',
    icao: 'KDFW',
    iata: 'DFW',
    city: 'Dallas',
    country: 'United States',
    latitude: 32.8968,
    longitude: -97.0380
  },
  {
    id: '104',
    name: 'Seattle-Tacoma International Airport',
    icao: 'KSEA',
    iata: 'SEA',
    city: 'Seattle',
    country: 'United States',
    latitude: 47.4502,
    longitude: -122.3088
  },
  {
    id: '105',
    name: 'Boston Logan International Airport',
    icao: 'KBOS',
    iata: 'BOS',
    city: 'Boston',
    country: 'United States',
    latitude: 42.3656,
    longitude: -71.0096
  },
  {
    id: '106',
    name: 'Calgary International Airport',
    icao: 'CYYC',
    iata: 'YYC',
    city: 'Calgary',
    country: 'Canada',
    latitude: 51.1215,
    longitude: -114.0076
  },
  {
    id: '107',
    name: 'Cancún International Airport',
    icao: 'MMUN',
    iata: 'CUN',
    city: 'Cancún',
    country: 'Mexico',
    latitude: 21.0365,
    longitude: -86.8771
  },
  // South America
  {
    id: '108',
    name: 'Rio de Janeiro/Galeão International Airport',
    icao: 'SBGL',
    iata: 'GIG',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    latitude: -22.8100,
    longitude: -43.2500
  },
  {
    id: '109',
    name: 'Caracas Simón Bolívar International Airport',
    icao: 'SVMI',
    iata: 'CCS',
    city: 'Caracas',
    country: 'Venezuela',
    latitude: 10.6031,
    longitude: -66.9901
  },
  {
    id: '110',
    name: 'Quito International Airport',
    icao: 'SEQM',
    iata: 'UIO',
    city: 'Quito',
    country: 'Ecuador',
    latitude: -0.1292,
    longitude: -78.3575
  },
  // Africa
  // Africa
  {
    id: '111',
    name: 'Kotoka International Airport',
    icao: 'DGAA',
    iata: 'ACC',
    city: 'Accra',
    country: 'Ghana',
    latitude: 5.6052,
    longitude: -0.1668
  },
  {
    id: '112',
    name: 'Kigali International Airport',
    icao: 'HRYR',
    iata: 'KGL',
    city: 'Kigali',
    country: 'Rwanda',
    latitude: -1.9686,
    longitude: 30.1394
  },
  {
    id: '113',
    name: 'Maputo International Airport',
    icao: 'FQMA',
    iata: 'MPM',
    city: 'Maputo',
    country: 'Mozambique',
    latitude: -25.9208,
    longitude: 32.5726
  },
  {
    id: '114',
    name: 'Dakar Blaise Diagne International Airport',
    icao: 'GOBD',
    iata: 'DSS',
    city: 'Dakar',
    country: 'Senegal',
    latitude: 14.7397,
    longitude: -17.4902
  },
  {
    id: '115',
    name: 'Douala International Airport',
    icao: 'FKKD',
    iata: 'DLA',
    city: 'Douala',
    country: 'Cameroon',
    latitude: 4.0061,
    longitude: 9.7194
  },
  {
    id: '116',
    name: 'Lusaka International Airport',
    icao: 'FLKK',
    iata: 'LUN',
    city: 'Lusaka',
    country: 'Zambia',
    latitude: -15.3308,
    longitude: 28.4526
  },
  {
    id: '117',
    name: 'Banjul International Airport',
    icao: 'GBYD',
    iata: 'BJL',
    city: 'Banjul',
    country: 'Gambia',
    latitude: 13.3380,
    longitude: -16.6522
  },
  // Asia
  {
    id: '118',
    name: 'Shenzhen Bao\'an International Airport',
    icao: 'ZGSZ',
    iata: 'SZX',
    city: 'Shenzhen',
    country: 'China',
    latitude: 22.6393,
    longitude: 113.8108
  },
  {
    id: '119',
    name: 'Chengdu Shuangliu International Airport',
    icao: 'ZUUU',
    iata: 'CTU',
    city: 'Chengdu',
    country: 'China',
    latitude: 30.5785,
    longitude: 103.9471
  },
  {
    id: '120',
    name: 'Chongqing Jiangbei International Airport',
    icao: 'ZUCK',
    iata: 'CKG',
    city: 'Chongqing',
    country: 'China',
    latitude: 29.7192,
    longitude: 106.6417
  },
  {
    id: '121',
    name: 'Xiamen Gaoqi International Airport',
    icao: 'ZSAM',
    iata: 'XMN',
    city: 'Xiamen',
    country: 'China',
    latitude: 24.5440,
    longitude: 118.1277
  },
  {
    id: '122',
    name: 'Phnom Penh International Airport',
    icao: 'VDPP',
    iata: 'PNH',
    city: 'Phnom Penh',
    country: 'Cambodia',
    latitude: 11.5466,
    longitude: 104.8441
  },
  {
    id: '123',
    name: 'Yangon International Airport',
    icao: 'VYYY',
    iata: 'RGN',
    city: 'Yangon',
    country: 'Myanmar',
    latitude: 16.9073,
    longitude: 96.1332
  },
  {
    id: '124',
    name: 'Bandaranaike International Airport',
    icao: 'VCBI',
    iata: 'CMB',
    city: 'Colombo',
    country: 'Sri Lanka',
    latitude: 7.1808,
    longitude: 79.8841
  },
  {
    id: '125',
    name: 'Hanoi Noi Bai International Airport',
    icao: 'VVNB',
    iata: 'HAN',
    city: 'Hanoi',
    country: 'Vietnam',
    latitude: 21.2212,
    longitude: 105.8072
  },
  {
    id: '126',
    name: 'Ho Chi Minh City International Airport',
    icao: 'VVTS',
    iata: 'SGN',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    latitude: 10.8188,
    longitude: 106.6520
  },
  {
    id: '127',
    name: 'Kathmandu Tribhuvan International Airport',
    icao: 'VNKT',
    iata: 'KTM',
    city: 'Kathmandu',
    country: 'Nepal',
    latitude: 27.6966,
    longitude: 85.3591
  },
  // Europe
  {
    id: '128',
    name: 'Berlin Brandenburg Airport',
    icao: 'EDDB',
    iata: 'BER',
    city: 'Berlin',
    country: 'Germany',
    latitude: 52.3667,
    longitude: 13.5033
  },
  {
    id: '129',
    name: 'Manchester Airport',
    icao: 'EGCC',
    iata: 'MAN',
    city: 'Manchester',
    country: 'United Kingdom',
    latitude: 53.3537,
    longitude: -2.2750
  },
  {
    id: '130',
    name: 'Brussels South Charleroi Airport',
    icao: 'EBCI',
    iata: 'CRL',
    city: 'Charleroi',
    country: 'Belgium',
    latitude: 50.4592,
    longitude: 4.4538
  },
  {
    id: '131',
    name: 'Oslo Gardermoen Airport',
    icao: 'ENGM',
    iata: 'OSL',
    city: 'Oslo',
    country: 'Norway',
    latitude: 60.1939,
    longitude: 11.1004
  },
  {
    id: '132',
    name: 'Prague Václav Havel Airport',
    icao: 'LKPR',
    iata: 'PRG',
    city: 'Prague',
    country: 'Czech Republic',
    latitude: 50.1008,
    longitude: 14.2600
  },
  {
    id: '133',
    name: 'Budapest Ferenc Liszt International Airport',
    icao: 'LHBP',
    iata: 'BUD',
    city: 'Budapest',
    country: 'Hungary',
    latitude: 47.4369,
    longitude: 19.2556
  },
  {
    id: '134',
    name: 'Málaga Costa del Sol Airport',
    icao: 'LEMG',
    iata: 'AGP',
    city: 'Málaga',
    country: 'Spain',
    latitude: 36.6749,
    longitude: -4.4991
  },
  {
    id: '135',
    name: 'Geneva International Airport',
    icao: 'LSGG',
    iata: 'GVA',
    city: 'Geneva',
    country: 'Switzerland',
    latitude: 46.2381,
    longitude: 6.1089
  },
  // North America
  {
    id: '136',
    name: 'Phoenix Sky Harbor International Airport',
    icao: 'KPHX',
    iata: 'PHX',
    city: 'Phoenix',
    country: 'United States',
    latitude: 33.4343,
    longitude: -112.0116
  },
  {
    id: '137',
    name: 'Orlando International Airport',
    icao: 'KMCO',
    iata: 'MCO',
    city: 'Orlando',
    country: 'United States',
    latitude: 28.4294,
    longitude: -81.3090
  },
  {
    id: '138',
    name: 'Las Vegas McCarran International Airport',
    icao: 'KLAS',
    iata: 'LAS',
    city: 'Las Vegas',
    country: 'United States',
    latitude: 36.0801,
    longitude: -115.1523
  },
  {
    id: '139',
    name: 'Edmonton International Airport',
    icao: 'CYEG',
    iata: 'YEG',
    city: 'Edmonton',
    country: 'Canada',
    latitude: 53.3097,
    longitude: -113.5800
  },
  // South America
  {
    id: '140',
    name: 'São Paulo–Congonhas Airport',
    icao: 'SBSP',
    iata: 'CGH',
    city: 'São Paulo',
    country: 'Brazil',
    latitude: -23.6261,
    longitude: -46.6564
  },
  {
    id: '141',
    name: 'El Alto International Airport',
    icao: 'SLLP',
    iata: 'LPB',
    city: 'La Paz',
    country: 'Bolivia',
    latitude: -16.5133,
    longitude: -68.1923
  },
  {
    id: '142',
    name: 'Asunción Silvio Pettirossi International Airport',
    icao: 'SGAS',
    iata: 'ASU',
    city: 'Asunción',
    country: 'Paraguay',
    latitude: -25.2399,
    longitude: -57.5191
  },
  {
    id: '143',
    name: 'Montevideo Carrasco International Airport',
    icao: 'SUMU',
    iata: 'MVD',
    city: 'Montevideo',
    country: 'Uruguay',
    latitude: -34.8384,
    longitude: -56.0308
  },


  
  // Africa
  {
    id: '144',
    name: 'Bole International Airport',
    icao: 'HAAB',
    iata: 'ADD',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    latitude: 8.9778,
    longitude: 38.7993
  },
  {
    id: '145',
    name: 'Murtala Muhammed International Airport',
    icao: 'DNMM',
    iata: 'LOS',
    city: 'Lagos',
    country: 'Nigeria',
    latitude: 6.5774,
    longitude: 3.3214
  },
  {
    id: '146',
    name: 'Tunis Carthage International Airport',
    icao: 'DTTA',
    iata: 'TUN',
    city: 'Tunis',
    country: 'Tunisia',
    latitude: 36.8515,
    longitude: 10.2272
  },
  {
    id: '147',
    name: 'Houari Boumediene Airport',
    icao: 'DAAG',
    iata: 'ALG',
    city: 'Algiers',
    country: 'Algeria',
    latitude: 36.6910,
    longitude: 3.2153
  },
  {
    id: '148',
    name: 'King Khalid International Airport',
    icao: 'OERK',
    iata: 'RUH',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    latitude: 24.9578,
    longitude: 46.6992
  },
  {
    id: '149',
    name: 'Abu Dhabi International Airport',
    icao: 'OMAA',
    iata: 'AUH',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    latitude: 24.4331,
    longitude: 54.6511
  },
  {
    id: '150',
    name: 'Ben Gurion Airport',
    icao: 'LLBG',
    iata: 'TLV',
    city: 'Tel Aviv',
    country: 'Israel',
    latitude: 32.0114,
    longitude: 34.8867
  },
  // Asia
  {
    id: '151',
    name: 'Kansai International Airport',
    icao: 'RJBB',
    iata: 'KIX',
    city: 'Osaka',
    country: 'Japan',
    latitude: 34.4342,
    longitude: 135.2233
  },
  {
    id: '152',
    name: 'Guangzhou Baiyun International Airport',
    icao: 'ZGGG',
    iata: 'CAN',
    city: 'Guangzhou',
    country: 'China',
    latitude: 23.3959,
    longitude: 113.3080
  },
  {
    id: '153',
    name: 'Soekarno–Hatta International Airport',
    icao: 'WIII',
    iata: 'CGK',
    city: 'Jakarta',
    country: 'Indonesia',
    latitude: -6.1256,
    longitude: 106.6558
  },
  {
    id: '154',
    name: 'Ninoy Aquino International Airport',
    icao: 'RPLL',
    iata: 'MNL',
    city: 'Manila',
    country: 'Philippines',
    latitude: 14.5086,
    longitude: 121.0197
  },
  {
    id: '155',
    name: 'Shenzhen Bao\'an International Airport',
    icao: 'ZGSZ',
    iata: 'SZX',
    city: 'Shenzhen',
    country: 'China',
    latitude: 22.6393,
    longitude: 113.8108
  },
  {
    id: '156',
    name: 'Chengdu Shuangliu International Airport',
    icao: 'ZUUU',
    iata: 'CTU',
    city: 'Chengdu',
    country: 'China',
    latitude: 30.5785,
    longitude: 103.9471
  },
  {
    id: '157',
    name: 'Chongqing Jiangbei International Airport',
    icao: 'ZUCK',
    iata: 'CKG',
    city: 'Chongqing',
    country: 'China',
    latitude: 29.7192,
    longitude: 106.6417
  },
  {
    id: '158',
    name: 'Xiamen Gaoqi International Airport',
    icao: 'ZSAM',
    iata: 'XMN',
    city: 'Xiamen',
    country: 'China',
    latitude: 24.5440,
    longitude: 118.1277
  },
  {
    id: '159',
    name: 'Phnom Penh International Airport',
    icao: 'VDPP',
    iata: 'PNH',
    city: 'Phnom Penh',
    country: 'Cambodia',
    latitude: 11.5466,
    longitude: 104.8441
  },
  {
    id: '160',
    name: 'Yangon International Airport',
    icao: 'VYYY',
    iata: 'RGN',
    city: 'Yangon',
    country: 'Myanmar',
    latitude: 16.9073,
    longitude: 96.1332
  },
  {
    id: '161',
    name: 'Bandaranaike International Airport',
    icao: 'VCBI',
    iata: 'CMB',
    city: 'Colombo',
    country: 'Sri Lanka',
    latitude: 7.1808,
    longitude: 79.8841
  },
  {
    id: '162',
    name: 'Hanoi Noi Bai International Airport',
    icao: 'VVNB',
    iata: 'HAN',
    city: 'Hanoi',
    country: 'Vietnam',
    latitude: 21.2212,
    longitude: 105.8072
  },
  {
    id: '163',
    name: 'Ho Chi Minh City International Airport',
    icao: 'VVTS',
    iata: 'SGN',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    latitude: 10.8188,
    longitude: 106.6520
  },
  {
    id: '164',
    name: 'Kathmandu Tribhuvan International Airport',
    icao: 'VNKT',
    iata: 'KTM',
    city: 'Kathmandu',
    country: 'Nepal',
    latitude: 27.6966,
    longitude: 85.3591
  },
  // Europe
  {
    id: '165',
    name: 'Berlin Brandenburg Airport',
    icao: 'EDDB',
    iata: 'BER',
    city: 'Berlin',
    country: 'Germany',
    latitude: 52.3667,
    longitude: 13.5033
  },
  {
    id: '166',
    name: 'Manchester Airport',
    icao: 'EGCC',
    iata: 'MAN',
    city: 'Manchester',
    country: 'United Kingdom',
    latitude: 53.3537,
    longitude: -2.2750
  },
  {
    id: '167',
    name: 'Brussels South Charleroi Airport',
    icao: 'EBCI',
    iata: 'CRL',
    city: 'Charleroi',
    country: 'Belgium',
    latitude: 50.4592,
    longitude: 4.4538
  },
  {
    id: '168',
    name: 'Oslo Gardermoen Airport',
    icao: 'ENGM',
    iata: 'OSL',
    city: 'Oslo',
    country: 'Norway',
    latitude: 60.1939,
    longitude: 11.1004
  },
  {
    id: '169',
    name: 'Prague Václav Havel Airport',
    icao: 'LKPR',
    iata: 'PRG',
    city: 'Prague',
    country: 'Czech Republic',
    latitude: 50.1008,
    longitude: 14.2600
  },
  {
    id: '170',
    name: 'Budapest Ferenc Liszt International Airport',
    icao: 'LHBP',
    iata: 'BUD',
    city: 'Budapest',
    country: 'Hungary',
    latitude: 47.4369,
    longitude: 19.2556
  },
  {
    id: '171',
    name: 'Málaga Costa del Sol Airport',
    icao: 'LEMG',
    iata: 'AGP',
    city: 'Málaga',
    country: 'Spain',
    latitude: 36.6749,
    longitude: -4.4991
  },
  {
    id: '172',
    name: 'Geneva International Airport',
    icao: 'LSGG',
    iata: 'GVA',
    city: 'Geneva',
    country: 'Switzerland',
    latitude: 46.2381,
    longitude: 6.1089
  },
  // North America
  {
    id: '173',
    name: 'Phoenix Sky Harbor International Airport',
    icao: 'KPHX',
    iata: 'PHX',
    city: 'Phoenix',
    country: 'United States',
    latitude: 33.4343,
    longitude: -112.0116
  },
  {
    id: '174',
    name: 'Orlando International Airport',
    icao: 'KMCO',
    iata: 'MCO',
    city: 'Orlando',
    country: 'United States',
    latitude: 28.4294,
    longitude: -81.3090
  },
  {
    id: '175',
    name: 'Las Vegas McCarran International Airport',
    icao: 'KLAS',
    iata: 'LAS',
    city: 'Las Vegas',
    country: 'United States',
    latitude: 36.0801,
    longitude: -115.1523
  },
  {
    id: '176',
    name: 'Edmonton International Airport',
    icao: 'CYEG',
    iata: 'YEG',
    city: 'Edmonton',
    country: 'Canada',
    latitude: 53.3097,
    longitude: -113.5800
  },
  // South America
  {
    id: '177',
    name: 'São Paulo–Congonhas Airport',
    icao: 'SBSP',
    iata: 'CGH',
    city: 'São Paulo',
    country: 'Brazil',
    latitude: -23.6261,
    longitude: -46.6564
  },
  {
    id: '178',
    name: 'El Alto International Airport',
    icao: 'SLLP',
    iata: 'LPB',
    city: 'La Paz',
    country: 'Bolivia',
    latitude: -16.5133,
    longitude: -68.1923
  },
  {
    id: '179',
    name: 'Asunción Silvio Pettirossi International Airport',
    icao: 'SGAS',
    iata: 'ASU',
    city: 'Asunción',
    country: 'Paraguay',
    latitude: -25.2399,
    longitude: -57.5191
  },
  {
    id: '180',
    name: 'Montevideo Carrasco International Airport',
    icao: 'SUMU',
    iata: 'MVD',
    city: 'Montevideo',
    country: 'Uruguay',
    latitude: -34.8384,
    longitude: -56.0308
  },
  // Africa
  {
    id: '181',
    name: 'Quatro de Fevereiro Airport',
    icao: 'FNLU',
    iata: 'LAD',
    city: 'Luanda',
    country: 'Angola',
    latitude: -8.8584,
    longitude: 13.2312
  },
  {
    id: '182',
    name: 'Bamako-Sénou International Airport',
    icao: 'GABS',
    iata: 'BKO',
    city: 'Bamako',
    country: 'Mali',
    latitude: 12.5335,
    longitude: -7.9499
  },
  {
    id: '183',
    name: 'Bujumbura International Airport',
    icao: 'HBBA',
    iata: 'BJM',
    city: 'Bujumbura',
    country: 'Burundi',
    latitude: -3.3240,
    longitude: 29.3185
  },
  {
    id: '184',
    name: 'Khartoum International Airport',
    icao: 'HSSS',
    iata: 'KRT',
    city: 'Khartoum',
    country: 'Sudan',
    latitude: 15.5895,
    longitude: 32.5532
  },
  {
    id: '185',
    name: 'Libreville International Airport',
    icao: 'FOOL',
    iata: 'LBV',
    city: 'Libreville',
    country: 'Gabon',
    latitude: 0.4586,
    longitude: 9.4123
  },
  // Asia
  {
    id: '186',
    name: 'Almaty International Airport',
    icao: 'UAAA',
    iata: 'ALA',
    city: 'Almaty',
    country: 'Kazakhstan',
    latitude: 43.3521,
    longitude: 77.0405
  },
  {
    id: '187',
    name: 'Tashkent International Airport',
    icao: 'UTTT',
    iata: 'TAS',
    city: 'Tashkent',
    country: 'Uzbekistan',
    latitude: 41.2579,
    longitude: 69.2817
  },
  {
    id: '188',
    name: 'Ashgabat International Airport',
    icao: 'UTAA',
    iata: 'ASB',
    city: 'Ashgabat',
    country: 'Turkmenistan',
    latitude: 37.9868,
    longitude: 58.3610
  },
  {
    id: '189',
    name: 'Bishkek Manas International Airport',
    icao: 'UCFM',
    iata: 'FRU',
    city: 'Bishkek',
    country: 'Kyrgyzstan',
    latitude: 43.0613,
    longitude: 74.4776
  },
  {
    id: '190',
    name: 'Dushanbe International Airport',
    icao: 'UTDD',
    iata: 'DYU',
    city: 'Dushanbe',
    country: 'Tajikistan',
    latitude: 38.5433,
    longitude: 68.8250
  },
  // Europe
  {
    id: '191',
    name: 'Sofia Airport',
    icao: 'LBSF',
    iata: 'SOF',
    city: 'Sofia',
    country: 'Bulgaria',
    latitude: 42.6952,
    longitude: 23.4062
  },
  {
    id: '192',
    name: 'Riga International Airport',
    icao: 'EVRA',
    iata: 'RIX',
    city: 'Riga',
    country: 'Latvia',
    latitude: 56.9236,
    longitude: 23.9711
  },
  {
    id: '193',
    name: 'Vilnius International Airport',
    icao: 'EYVI',
    iata: 'VNO',
    city: 'Vilnius',
    country: 'Lithuania',
    latitude: 54.6341,
    longitude: 25.2858
  },
  {
    id: '194',
    name: 'Tallinn Airport',
    icao: 'EETN',
    iata: 'TLL',
    city: 'Tallinn',
    country: 'Estonia',
    latitude: 59.4133,
    longitude: 24.8328
  },
  {
    id: '195',
    name: 'Skopje International Airport',
    icao: 'LWSK',
    iata: 'SKP',
    city: 'Skopje',
    country: 'North Macedonia',
    latitude: 41.9616,
    longitude: 21.6214
  },
  // North America
  {
    id: '196',
    name: 'San Diego International Airport',
    icao: 'KSAN',
    iata: 'SAN',
    city: 'San Diego',
    country: 'United States',
    latitude: 32.7338,
    longitude: -117.1933
  },
  {
    id: '197',
    name: 'Portland International Airport',
    icao: 'KPDX',
    iata: 'PDX',
    city: 'Portland',
    country: 'United States',
    latitude: 45.5886,
    longitude: -122.5975
  },
  {
    id: '198',
    name: 'Ottawa Macdonald–Cartier International Airport',
    icao: 'CYOW',
    iata: 'YOW',
    city: 'Ottawa',
    country: 'Canada',
    latitude: 45.3225,
    longitude: -75.6692
  },
  {
    id: '199',
    name: 'Halifax Stanfield International Airport',
    icao: 'CYHZ',
    iata: 'YHZ',
    city: 'Halifax',
    country: 'Canada',
    latitude: 44.8808,
    longitude: -63.5086
  },
  {
    id: '200',
    name: 'San José International Airport',
    icao: 'KSJC',
    iata: 'SJC',
    city: 'San Jose',
    country: 'United States',
    latitude: 37.3626,
    longitude: -121.9290
  },
  // South America
  {
    id: '201',
    name: 'Salvador International Airport',
    icao: 'SBSV',
    iata: 'SSA',
    city: 'Salvador',
    country: 'Brazil',
    latitude: -12.9086,
    longitude: -38.3225
  },
  {
    id: '202',
    name: 'Recife/Guararapes–Gilberto Freyre International Airport',
    icao: 'SBRF',
    iata: 'REC',
    city: 'Recife',
    country: 'Brazil',
    latitude: -8.1268,
    longitude: -34.9230
  },
  {
    id: '203',
    name: 'Medellín José María Córdova International Airport',
    icao: 'SKRG',
    iata: 'MDE',
    city: 'Medellín',
    country: 'Colombia',
    latitude: 6.1645,
    longitude: -75.4231
  },
  {
    id: '204',
    name: 'Cusco Alejandro Velasco Astete International Airport',
    icao: 'SPZO',
    iata: 'CUZ',
    city: 'Cusco',
    country: 'Peru',
    latitude: -13.5357,
    longitude: -71.9388
  },
  {
    id: '205',
    name: 'Santa Cruz Viru Viru International Airport',
    icao: 'SLVR',
    iata: 'VVI',
    city: 'Santa Cruz',
    country: 'Bolivia',
    latitude: -17.6448,
    longitude: -63.1354
  },
  // Oceania
  {
    id: '206',
    name: 'Perth Airport',
    icao: 'YPPH',
    iata: 'PER',
    city: 'Perth',
    country: 'Australia',
    latitude: -31.9403,
    longitude: 115.9669
  },
  {
    id: '207',
    name: 'Adelaide Airport',
    icao: 'YPAD',
    iata: 'ADL',
    city: 'Adelaide',
    country: 'Australia',
    latitude: -34.9455,
    longitude: 138.5306
  },
  {
    id: '208',
    name: 'Wellington International Airport',
    icao: 'NZWN',
    iata: 'WLG',
    city: 'Wellington',
    country: 'New Zealand',
    latitude: -41.3272,
    longitude: 174.8053
  },
  {
    id: '209',
    name: 'Christchurch International Airport',
    icao: 'NZCH',
    iata: 'CHC',
    city: 'Christchurch',
    country: 'New Zealand',
    latitude: -43.4894,
    longitude: 172.5322
  },
  {
    id: '210',
    name: 'Nadi International Airport',
    icao: 'NFFN',
    iata: 'NAN',
    city: 'Nadi',
    country: 'Fiji',
    latitude: -17.7554,
    longitude: 177.4434
  }
];
export const getAirportByIcao = (icao: string): Airport | undefined => {
  return airports.find(airport => airport.icao === icao);
};

export const getMoroccanAirports = (): Airport[] => {
  return airports.filter(airport => airport.country === 'Morocco');
};

export const getInternationalAirports = (): Airport[] => {
  return airports.filter(airport => airport.country !== 'Morocco');
};