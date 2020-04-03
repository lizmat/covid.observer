var countries = [['asia','Asia'],['africa','Africa'],['europe','Europe'],['north-america','North America'],['south-america','South America'],['oceania','Oceania'],['AF','Afghanistan'],['AL','Albania'],['DZ','Algeria'],['AD','Andorra'],['AO','Angola'],['AI','Anguilla'],['AG','Antigua and Barbuda'],['AR','Argentina'],['AM','Armenia'],['AW','Aruba'],['AU','Australia'],['AT','Austria'],['AZ','Azerbaijan'],['BS','Bahamas'],['BH','Bahrain'],['BD','Bangladesh'],['BB','Barbados'],['BY','Belarus'],['BE','Belgium'],['BZ','Belize'],['BJ','Benin'],['BM','Bermuda'],['BT','Bhutan'],['BO','Bolivia'],['BA','Bosnia and Herzegovina'],['BW','Botswana'],['BR','Brazil'],['VG','British Virgin Islands'],['BN','Brunei Darussalam'],['BG','Bulgaria'],['BF','Burkina Faso'],['CV','Cabo Verde'],['KH','Cambodia'],['CM','Cameroon'],['CA','Canada'],['KY','Cayman Islands'],['CF','Central African Republic'],['TD','Chad'],['CL','Chile'],['CN','China'],['CO','Colombia'],['CG','Congo'],['CR','Costa Rica'],['HR','Croatia'],['CU','Cuba'],['CW','Curaçao'],['CY','Cyprus'],['CZ','Czechia'],['CD','Dem. Rep. of the Congo'],['DK','Denmark'],['DJ','Djibouti'],['DM','Dominica'],['DO','Dominican Republic'],['EC','Ecuador'],['EG','Egypt'],['SV','El Salvador'],['GQ','Equatorial Guinea'],['ER','Eritrea'],['EE','Estonia'],['SZ','Eswatini'],['ET','Ethiopia'],['FO','Faroe Islands'],['FJ','Fiji'],['FI','Finland'],['FR','France'],['GF','French Guiana'],['PF','French Polynesia'],['GA','Gabon'],['GM','Gambia'],['GE','Georgia'],['DE','Germany'],['GH','Ghana'],['GI','Gibraltar'],['GR','Greece'],['GL','Greenland'],['GD','Grenada'],['GP','Guadeloupe'],['GU','Guam'],['GT','Guatemala'],['GN','Guinea'],['GW','Guinea-Bissau'],['GY','Guyana'],['HT','Haiti'],['VA','Holy See'],['HN','Honduras'],['HU','Hungary'],['IS','Iceland'],['IN','India'],['ID','Indonesia'],['IR','Iran'],['IQ','Iraq'],['IE','Ireland'],['IM','Isle of Man'],['IL','Israel'],['IT','Italy'],['JM','Jamaica'],['JP','Japan'],['JO','Jordan'],['KZ','Kazakhstan'],['KE','Kenya'],['XK','Kosovo'],['KW','Kuwait'],['KG','Kyrgyzstan'],['LA','Lao People\'s Dem. Rep.'],['LV','Latvia'],['LB','Lebanon'],['LR','Liberia'],['LY','Libya'],['LI','Liechtenstein'],['LT','Lithuania'],['LU','Luxembourg'],['MG','Madagascar'],['MY','Malaysia'],['MV','Maldives'],['ML','Mali'],['MT','Malta'],['MQ','Martinique'],['MR','Mauritania'],['MU','Mauritius'],['YT','Mayotte'],['MX','Mexico'],['MD','Moldova'],['MC','Monaco'],['MN','Mongolia'],['ME','Montenegro'],['MS','Montserrat'],['MA','Morocco'],['MZ','Mozambique'],['MM','Myanmar'],['NA','Namibia'],['NP','Nepal'],['NL','Netherlands'],['NC','New Caledonia'],['NZ','New Zealand'],['NI','Nicaragua'],['NE','Niger'],['NG','Nigeria'],['MK','North Macedonia'],['NO','Norway'],['OM','Oman'],['PK','Pakistan'],['PA','Panama'],['PG','Papua New Guinea'],['PY','Paraguay'],['PE','Peru'],['PH','Philippines'],['PL','Poland'],['PT','Portugal'],['PR','Puerto Rico'],['QA','Qatar'],['RO','Romania'],['RU','Russian Federation'],['RW','Rwanda'],['RE','Réunion'],['BL','Saint Barthélemy'],['KN','Saint Kitts and Nevis'],['LC','Saint Lucia'],['SM','San Marino'],['SA','Saudi Arabia'],['SN','Senegal'],['RS','Serbia'],['SC','Seychelles'],['SG','Singapore'],['SX','Sint Maarten'],['SK','Slovakia'],['SI','Slovenia'],['SO','Somalia'],['ZA','South Africa'],['KR','South Korea'],['ES','Spain'],['LK','Sri Lanka'],['PS','State of Palestine'],['SD','Sudan'],['SR','Suriname'],['SE','Sweden'],['CH','Switzerland'],['SY','Syrian Arab Republic'],['TW','Taiwan'],['TZ','Tanzania'],['TH','Thailand'],['TL','Timor-Leste'],['TG','Togo'],['TT','Trinidad and Tobago'],['TN','Tunisia'],['TR','Turkey'],['TC','Turks and Caicos Islands'],['UG','Uganda'],['UA','Ukraine'],['AE','United Arab Emirates'],['GB','United Kingdom'],['US','United States of America'],['UY','Uruguay'],['UZ','Uzbekistan'],['VE','Venezuela'],['VN','Viet Nam'],['ZM','Zambia'],['ZW','Zimbabwe'],['CN/AH','China/Anhui'],['CN/BJ','China/Beijing'],['CN/CQ','China/Chongqing'],['CN/FJ','China/Fujian'],['CN/GS','China/Gansu'],['CN/GD','China/Guangdong'],['CN/GX','China/Guangxi Zhuangzu'],['CN/GZ','China/Guizhou'],['CN/HI','China/Hainan'],['CN/HE','China/Hebei'],['CN/HL','China/Heilongjiang'],['CN/HA','China/Henan'],['CN/HK','China/Hong Kong'],['CN/HB','China/Hubei'],['CN/HN','China/Hunan'],['CN/JS','China/Jiangsu'],['CN/JX','China/Jiangxi'],['CN/JL','China/Jilin'],['CN/LN','China/Liaoning'],['CN/MO','China/Macao'],['CN/NM','China/Nei Mongol'],['CN/NX','China/Ningxia Huizi'],['CN/QH','China/Qinghai'],['CN/SN','China/Shaanxi'],['CN/SD','China/Shandong'],['CN/SH','China/Shanghai'],['CN/SX','China/Shanxi'],['CN/SC','China/Sichuan'],['CN/TW','China/Taiwan'],['CN/TJ','China/Tianjin'],['CN/XJ','China/Xinjiang Uygur'],['CN/XZ','China/Xizang'],['CN/YN','China/Yunnan'],['CN/ZJ','China/Zhejiang'],['US/AL','US/Alabama'],['US/AK','US/Alaska'],['US/AZ','US/Arizona'],['US/AR','US/Arkansas'],['US/CA','US/California'],['US/CO','US/Colorado'],['US/CT','US/Connecticut'],['US/DE','US/Delaware'],['US/DC','US/District of Columbia'],['US/FL','US/Florida'],['US/GA','US/Georgia'],['US/GU','US/Guam'],['US/HI','US/Hawaii'],['US/ID','US/Idaho'],['US/IL','US/Illinois'],['US/IN','US/Indiana'],['US/IA','US/Iowa'],['US/KS','US/Kansas'],['US/KY','US/Kentucky'],['US/LA','US/Louisiana'],['US/ME','US/Maine'],['US/MD','US/Maryland'],['US/MA','US/Massachusetts'],['US/MI','US/Michigan'],['US/MN','US/Minnesota'],['US/MS','US/Mississippi'],['US/MO','US/Missouri'],['US/MT','US/Montana'],['US/NE','US/Nebraska'],['US/NV','US/Nevada'],['US/NH','US/New Hampshire'],['US/NJ','US/New Jersey'],['US/NM','US/New Mexico'],['US/NY','US/New York'],['US/NC','US/North Carolina'],['US/ND','US/North Dakota'],['US/OH','US/Ohio'],['US/OK','US/Oklahoma'],['US/OR','US/Oregon'],['US/PA','US/Pennsylvania'],['US/PR','US/Puerto Rico'],['US/RI','US/Rhode Island'],['US/SC','US/South Carolina'],['US/SD','US/South Dakota'],['US/TN','US/Tennessee'],['US/TX','US/Texas'],['US/UT','US/Utah'],['US/VT','US/Vermont'],['US/VI','US/Virgin Islands'],['US/VA','US/Virginia'],['US/WA','US/Washington'],['US/WV','US/West Virginia'],['US/WI','US/Wisconsin'],['US/WY','US/Wyoming']];