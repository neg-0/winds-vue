const fs = require('fs');

const weatherFileName = 'WT_1MIN_13.csv';

const weatherFile = fs.readFileSync(weatherFileName, 'utf8');

// The weather file csv looks like this
/*
WT011161813 CCAFS/KSC ,WIND TOWER DATA,1813Z,26,Apr,2023,,,,,,,,,,,,,,
TOWER,PREVAILING,LAT,LON,HGT,AV,01 MIN AVG DIR,01 MIN AVG SPD,01 MIN PEAK DIR,01 PEAK SPD,10 MIN PEAK DIR,10 MIN PEAK SPD,DEV,TMP,DP,RH,DIF,PRE,DIFRAD,REFRAD,SLTEMP,SLMOIST,RAINRATE,RAINHR
UNITS,,DEG,DEG,FT,MIN,DEG,KTS,DEG,KTS,DEG,KTS,DEG,F,F,%,F,MB,W/M2,W/M2,MM,%,IN/HR,IN
CS3,,28.6242,-80.6194,,01,,,,,,,,,,,,,,,,,0,0
CS6,,28.6291,-80.6237,,01,,,,,,,,,,,,,,,,,0,0.01
0001,,28.4338,-80.5734,54,01,005,10,011,12,014,12,9,76.6,67.7,74,-.7,,,,,,,
0001,,28.4338,-80.5734,12,01,063,7,041,10,068,13,21,,,,,,,,,,,
0001,,28.4338,-80.5734,6,01,,,,,,,,77.3,69.5,77,,,,,78.8,3.4,,
0002NW,SE,28.4443,-80.5620,204,01,076,9,076,11,065,14,10,75.9,67.4,75,,,71.0,11.0,,,,
0002NW,SE,28.4443,-80.5620,145,01,077,10,078,11,055,13,10,,,,,,,,,,,
0002NW,SE,28.4443,-80.5620,90,01,079,8,078,11,054,13,12,,,,,,,,,,,
0002NW,SE,28.4443,-80.5620,54,01,085,6,074,9,051,12,13,76.9,69.1,77,-.1,,,,,,,
0002NW,SE,28.4443,-80.5620,12,01,075,4,091,5,065,11,17,,,,,,,,,,,
0002NW,SE,28.4443,-80.5620,6,01,,,,,,,,77.0,70.0,79,,,,,76.5,12.2,,
0002SE,SE,28.4443,-80.5620,204,01,073,9,072,11,067,13,11,75.9,68.6,78,,,,,,,,
0002SE,SE,28.4443,-80.5620,145,01,074,9,074,10,049,13,11,,,,,,,,,,,
0002SE,SE,28.4443,-80.5620,90,01,076,8,070,10,062,12,12,,,,,,,,,,,
0002SE,SE,28.4443,-80.5620,54,01,082,7,095,10,047,12,14,76.5,67.6,74,-.5,,,,,,,
0002SE,SE,28.4443,-80.5620,12,01,068,4,075,7,027,10,19,,,,,,,,,,,
0002SE,SE,28.4443,-80.5620,6,01,,,,,,,,77.0,68.5,75,,,,,,,,
0003,,28.4537,-80.5285,54,01,066,10,066,11,062,12,5,999,999,999,999,,,,,,,
0003,,28.4537,-80.5285,12,01,065,6,061,8,061,9,15,,,,,,,,,,,
0003,,28.4537,-80.5285,6,01,,,,,,,,999,999,999,,,,,84.4,9.5,,
0006NW,SE,28.5130,-80.5613,204,01,066,12,066,13,065,14,4,77.8,71.1,80,,,,,,,,
0006NW,SE,28.5130,-80.5613,162,01,064,12,064,12,062,14,5,,,,,,,,,,,
0006NW,SE,28.5130,-80.5613,54,01,071,9,065,11,070,13,14,78.4,70.2,76,-1.1,,,,,,,
0006NW,SE,28.5130,-80.5613,12,01,056,7,054,10,071,12,17,,,,,,,,,,,
0006NW,SE,28.5130,-80.5613,6,01,,,,,,,,79.5,70.5,74,,,,,79.0,4.4,,
0006SE,SE,28.5130,-80.5613,204,01,060,11,058,13,062,14,4,75.7,68.4,78,,,,,,,,
0006SE,SE,28.5130,-80.5613,162,01,062,11,059,12,063,13,6,,,,,,,,,,,
0006SE,SE,28.5130,-80.5613,54,01,056,6,043,10,051,12,16,78.2,71.2,79,-1.8,,,,,,,
0006SE,SE,28.5130,-80.5613,12,01,046,7,050,10,048,12,20,,,,,,,,,,,
0006SE,SE,28.5130,-80.5613,6,01,,,,,,,,80.0,71.0,74,,,,,,,,
0015,,28.7029,-80.6679,54,01,091,9,085,10,085,11,4,,,,,,,,,,,
0015,,28.7029,-80.6679,6,01,,,,,,,,77.8,999,999,,,,,,,,
0022,,28.7975,-80.7378,54,01,999,999,999,999,999,999,999,,,,,,,,,,,
0022,,28.7975,-80.7378,6,01,,,,,,,,999,999,999,,,,,,,,
0108,,28.5359,-80.5748,54,01,073,10,077,11,085,13,11,78.1,70.7,78,-3.1,,,,,,,
0108,,28.5359,-80.5748,12,01,071,6,068,10,063,12,15,,,,,,,,,,,
0108,,28.5359,-80.5748,6,01,,,,,,,,81.2,71.3,72,,,,,84.0,3.3,,
0110NW,SE,28.5697,-80.5864,204,01,063,12,061,14,050,15,8,76.3,67.8,75,,,,,,,,
0110NW,SE,28.5697,-80.5864,162,01,065,13,069,14,068,15,9,,,,,,,,,,,
0110NW,SE,28.5697,-80.5864,54,01,058,12,064,15,046,16,13,79.6,68.1,68,-.5,,,,,,,
0110NW,SE,28.5697,-80.5864,12,01,051,8,047,12,047,12,22,,,,,,,,,,,
0110NW,SE,28.5697,-80.5864,6,01,,,,,,,,80.1,70.7,73,,,,,75.9,7.2,,
0110SE,SE,28.5697,-80.5864,204,01,062,12,068,14,049,15,8,77.2,68.7,75,,,,,,,,
0110SE,SE,28.5697,-80.5864,162,01,060,12,061,14,062,14,8,,,,,,,,,,,
0110SE,SE,28.5697,-80.5864,54,01,057,12,059,14,054,16,13,77.3,68.0,73,-2.6,,,,,,,
0110SE,SE,28.5697,-80.5864,12,01,041,8,033,12,033,12,28,,,,,,,,,,,
0110SE,SE,28.5697,-80.5864,6,01,,,,,,,,79.9,69.7,71,,,,,,,,
0211,,28.6061,-80.6214,54,01,090,7,090,11,066,13,16,82.1,66.3,67,.9,,,,,,,
0211,,28.6061,-80.6214,12,01,082,6,085,9,072,11,16,,,,,,,,,,,
0211,,28.6061,-80.6214,6,01,,,,,,,,81.2,70.9,71,,,,,77.2,7.5,,
0300,,28.4048,-80.6519,54,01,999,999,999,999,999,999,999,,,,,,,,,,,
0300,,28.4048,-80.6519,6,01,,,,,,,,999,999,999,,,,,,,,
0303,,28.4600,-80.5711,54,01,053,4,054,7,047,13,16,999,999,999,999,,,,,,,
0303,,28.4600,-80.5711,12,01,074,2,072,4,037,10,21,,,,,,,,,,,
0303,,28.4600,-80.5711,6,01,,,,,,,,77.2,69.8,78,,,,,999,999,,
0311,,28.6028,-80.6414,54,01,074,8,070,11,067,13,13,999,999,999,999,,,,,,,
0311,,28.6028,-80.6414,12,01,069,5,060,8,067,11,17,,,,,,,,,,,
0311,,28.6028,-80.6414,6,01,,,,,,,,79.6,69.4,71,,,,,79.2,8.3,,
0313NE,SW,28.6256,-80.6571,492,01,999,999,999,999,999,999,999,999,999,75,,,,,,,,
0313NE,SW,28.6256,-80.6571,394,01,999,999,999,999,999,999,999,,,,,,,,,,,
0313NE,SW,28.6256,-80.6571,295,01,999,999,999,999,999,999,999,,,,,,,,,,,
0313NE,SW,28.6256,-80.6571,204,01,069,8,065,12,087,15,11,76.7,68.6,76,,,,,,,,
0313NE,SW,28.6256,-80.6571,162,01,068,8,060,12,076,15,11,,,,,,,,,,,
0313NE,SW,28.6256,-80.6571,54,01,060,9,060,12,069,15,15,78.7,69.7,74,-1.8,,,,,,,
0313NE,SW,28.6256,-80.6571,12,01,074,6,078,8,107,13,21,,,,,,,,,,,
0313NE,SW,28.6256,-80.6571,6,01,,,,,,,,80.5,71.1,73,,1014.7,986.0,172.0,72.9,8.6,,
0313SW,SW,28.6256,-80.6571,492,01,999,999,999,999,999,999,999,999,999,999,,,,,,,,
0313SW,SW,28.6256,-80.6571,394,01,999,999,999,999,999,999,999,,,,,,,,,,,
0313SW,SW,28.6256,-80.6571,295,01,999,999,999,999,999,999,999,,,,,,,,,,,
0313SW,SW,28.6256,-80.6571,204,01,069,8,053,12,080,16,10,78.3,67.3,999,,,,,,,,
0313SW,SW,28.6256,-80.6571,162,01,076,8,074,12,077,15,10,,,,,,,,,,,
0313SW,SW,28.6256,-80.6571,54,01,064,8,065,13,068,16,13,79.1,70.1,74,-1.5,,,,,,,
0313SW,SW,28.6256,-80.6571,12,01,070,6,082,10,098,15,19,,,,,,,,,,,
0313SW,SW,28.6256,-80.6571,6,01,,,,,,,,80.6,70.7,72,,,,,,,,
0403,,28.4586,-80.5923,54,01,057,8,051,10,066,13,12,76.4,69.4,79,-.7,,,,,,,
0403,,28.4586,-80.5923,12,01,065,4,070,9,068,10,18,,,,,,,,,,,
0403,,28.4586,-80.5923,6,01,,,,,,,,77.1,71.2,82,,,,,77.0,4.1,,
0412,,28.6063,-80.6739,54,01,041,8,041,10,044,13,16,999,999,999,999,,,,,,,
0412,,28.6063,-80.6739,12,01,070,7,070,12,061,12,18,,,,,,,,,,,
0412,,28.6063,-80.6739,6,01,,,,,,,,79.6,68.5,69,,,,,77.0,7.7,,
0415,,28.6586,-80.6998,54,01,000,0,035,3,026,5,20,78.2,66.4,67,-2.7,,,,,,,
0415,,28.6586,-80.6998,12,01,064,4,059,9,031,10,26,,,,,,,,,,,
0415,,28.6586,-80.6998,6,01,,,,,,,,80.9,68.0,65,,,,,83.3,11.5,,
0418,,28.7055,-80.7265,54,01,099,7,116,9,086,12,14,,,,,,,,,,,
0418,,28.7055,-80.7265,6,01,,,,,,,,81.0,69.9,69,,,,,,,,
0421,,28.7755,-80.8043,54,01,999,999,999,999,999,999,999,,,,,,,,,,,
0421,,28.7755,-80.8043,6,01,,,,,,,,999,999,999,,,,,,,,
0506,,28.5158,-80.6400,54,01,074,8,052,11,085,12,15,78.3,68.5,72,-1.7,,,,,,,
0506,,28.5158,-80.6400,12,01,080,7,070,11,070,11,17,,,,,,,,,,,
0506,,28.5158,-80.6400,6,01,,,,,,,,80.0,69.8,71,,,,,76.8,9.4,,
0509,,28.5623,-80.6694,54,01,069,9,074,12,056,13,17,999,999,999,999,,,,,,,
0509,,28.5623,-80.6694,12,01,064,3,087,6,080,9,31,,,,,,,,,,,
0509,,28.5623,-80.6694,6,01,,,,,,,,79.7,69.1,70,,,,,80.1,14.1,,
0511,,28.5986,-80.6817,30,01,083,10,085,13,089,14,16,,,,,,,,,,,
0511,,28.5986,-80.6817,6,01,,,,,,,,79.6,70.6,74,,,,,75.6,17.8,,
0512,,28.6160,-80.6930,30,01,087,9,083,11,048,12,15,,,,,,,,,,,
0512,,28.6160,-80.6930,6,01,,,,,,,,78.3,68.1,71,,,,,76.3,17.0,,
0513,,28.6308,-80.7027,30,01,050,10,050,11,068,16,11,,,,,,,,,,,
0513,,28.6308,-80.7027,6,01,,,,,,,,78.9,72.2,80,,,,,76.5,9.1,,
0714,,28.6431,-80.7482,54,01,070,8,072,10,077,10,17,77.6,68.7,74,-1.1,,,,,,,
0714,,28.6431,-80.7482,12,01,083,6,090,12,090,12,24,,,,,,,,,,,
0714,,28.6431,-80.7482,6,01,,,,,,,,78.7,69.3,73,,,,,78.8,11.5,,
0803,,28.4632,-80.6702,54,01,069,6,063,8,065,10,16,76.6,69.2,78,-.6,,,,,,,
0803,,28.4632,-80.6702,12,01,084,4,054,6,107,8,24,,,,,,,,,,,
0803,,28.4632,-80.6702,6,01,,,,,,,,77.2,70.9,81,,,,,82.0,8.3,,
0805,,28.5184,-80.6963,54,01,058,10,058,13,058,13,16,77.8,68.5,73,-1.7,,,,,,,
0805,,28.5184,-80.6963,12,01,061,6,052,10,052,10,16,,,,,,,,,,,
0805,,28.5184,-80.6963,6,01,,,,,,,,79.5,69.3,71,,,,,999,999,,
0819,,28.7464,-80.8707,54,01,999,999,999,999,999,999,999,,,,,,,,,,,
0819,,28.7464,-80.8707,6,01,,,,,,,,999,999,999,,,,,,,,
1000,,28.4079,-80.7604,54,01,099,5,087,7,102,11,13,,,,,,,,,,,
1000,,28.4079,-80.7604,6,01,,,,,,,,75.0,72.2,91,,,,,,,,
1007,,28.5272,-80.7742,54,01,083,11,081,12,085,13,12,,,,,,,,,,,
1007,,28.5272,-80.7742,6,01,,,,,,,,78.9,70.7,76,,,,,,,,
1012,,28.6056,-80.8248,54,01,999,999,999,999,999,999,999,,,,,,,,,,,
1012,,28.6056,-80.8248,6,01,,,,,,,,999,999,999,,,,,,,,
1204,,28.4843,-80.7856,54,01,999,999,999,999,999,999,999,,,,,,,,,,,
1204,,28.4843,-80.7856,6,01,,,,,,,,999,999,999,,,,,,,,
9404,,28.3382,-80.7321,54,01,999,999,999,999,999,999,999,,,,,,,,,,,
9404,,28.3382,-80.7321,6,01,,,,,,,,999,999,999,,,,,,,,
LC37E,,28.5310,-80.5642,376,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC37E,,28.5310,-80.5642,196,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC37W,,28.5313,-80.5648,376,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC37W,,28.5313,-80.5648,196,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC39ANE,,0.0000,0.0000,192,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC39ANW,,0.0000,0.0000,192,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC39ASE,,0.0000,0.0000,192,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC39BNE,,28.6278,-80.6223,457,01,999,999,999,999,999,999,999,999,999,999,,,,,,,,
LC39BNE,,28.6278,-80.6223,382,01,075,11,075,12,077,12,4,75.0,67.0,75,,,,,,,,
LC39BNE,,28.6278,-80.6223,257,01,068,11,066,12,060,12,3,77.0,67.0,74,,,,,,,,
LC39BNE,,28.6278,-80.6223,132,01,073,10,066,12,085,13,4,78.0,67.0,71,,,,,,,,
LC39BNW,,28.6262,-80.6219,457,01,076,13,076,13,076,14,3,75.0,67.0,77,,,,,,,,
LC39BNW,,28.6262,-80.6219,382,01,072,12,073,13,071,14,4,76.0,68.0,75,,,,,,,,
LC39BNW,,28.6262,-80.6219,257,01,071,12,069,14,084,14,4,77.0,69.0,77,,,,,,,,
LC39BNW,,28.6262,-80.6219,132,01,078,11,079,15,079,15,4,77.0,68.0,72,,,,,,,,
LC39BSW,,28.6276,-80.6196,457,01,079,11,083,12,083,13,2,75.0,67.0,77,,,,,,,,
LC39BSW,,28.6276,-80.6196,382,01,067,11,067,12,067,13,4,75.0,67.0,76,,,,,,,,
LC39BSW,,28.6276,-80.6196,257,01,069,10,068,12,075,13,3,76.0,67.0,74,,,,,,,,
LC39BSW,,28.6276,-80.6196,132,01,066,8,066,12,064,13,2,78.0,69.0,74,,,,,,,,
LC40N,,28.5625,-80.5775,150,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC40SE,,28.5613,-80.5769,150,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC40SW,,28.5614,-80.5777,150,01,999,999,999,999,999,999,999,,,,,,,,,,,
LC41NW,,28.5840,-80.5832,230,01,071,13,070,13,071,14,3,,,,,,,,,,,
LC41NW,,28.5840,-80.5832,50,01,072,10,066,12,071,13,8,,,,,,,,,,,
LC41SE,,28.5828,-80.5826,230,01,062,12,063,13,053,15,3,,,,,,,,,,,
LC41SE,,28.5828,-80.5826,50,01,063,8,066,12,081,14,8,,,,,,,,,,,
VAB_IN1,,28.5861,-80.6513,359,01,,,,,,,,77.4,69.2,76,,,,,,,,
VAB_IN1,,28.5861,-80.6513,195,01,,,,,,,,78.1,68.7,73,,,,,,,,
NNNN
*/

// Parse the data from the CSV file
function parseData(dataString) {
  const lines = dataString.split('\n');

  console.log(lines)

  // Get the headers from the second line
  const headers = lines[1].split(',');

  // Get the data starting from line 3

  const parsedData = lines.slice(4).map(line => {

    // If the line is the final string of "NNNN", skip this line
    if (line === 'NNNN') {
      return;
    }

    const values = line.split(',');
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = values[i];
    });
    return obj;
  });

  // remove all instances of null or where tower is blank
  parsedData.forEach((item, i) => {
    if (!item || item.TOWER == "") {
      parsedData.splice(i, 1);
    }
  });

  return parsedData;
}

const data = parseData(weatherFile);

// Write the data to a json file
fs.writeFile('weather.json', JSON.stringify(data, null, 2), function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 