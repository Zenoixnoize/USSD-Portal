//User Data in Sim Network
// Values 
function binaryAgent(str) {
  let array = str.split(" ");
  return array.map(code => String.fromCharCode(parseInt(code, 2))).join("");
}

console.log(binaryAgent("01000011 01101111 01100100 01100100 01100101 01100100 00100000 01000010 01111001 00100000 01010100 01101000 01100001 01110010 01101001 01101110 01100100 01110101 00100000 01001100 01101001 01111001 01100001 01101110 01100001 01100111 01100101 00100000"));
// 
var UseridName = ('K.L Tharindu Liyanage') ;
var JsonData06 = 01000011011011110110010001100100011001010110010000100000010000100111100100100000010101000110100001100001011100100110100101101110011001000111010100100000010011000110100101111001011000010110111001100001011001110110010100100000
var UseridINC = 20059726 ;
var UseridTP = 0711502119 ;
const CountryC = ('+94') ;
var UseridSB = 5 ;
var UseridLocation = ('Matugama') 
var UseridEMI = 9273772 ;
var UserIdPIN = 9894
var UserTowerID = 4
const ISPmobitel = 071 ;
var userSS, UserE ,User3G , User4G ,RGq ,RGi , FouG
const err = 1
const ManagementKeyBinary = 01000011011011110110010001100100011001010110010000100000010000100111100100100000010101000110100001100001011100100110100101101110011001000111010100100000010011000110100101111001011000010110111001100001011001110110010100100000
//Signal Strength Algorithm 
UserE1 = 1
UserE2 = 2
User3G1 = 3 
User3G2 = 4
User4G1 = 5
if(UserE1 == UseridSB){
  UserE = true
  userSS = ('E')
}
if(UserE2 == UseridSB) {
  UserE = true
  userSS = ('E')
}
if(User3G1 == UseridSB) {
  User3G = true
  userSS = ('3G')
}
if(User3G2 == UseridSB) {
  User3G = true
  userSS = ('H+')
}
if(User4G1 ==  UseridSB) {
  User4G = true
  userSS = ('4G')
}
else(userSS = 0)
var UserCredit = 200
var UserCreditLoan = 0 
var UserCreditLoanSwitch
if(UserCreditLoan == 0) {
  UserCreditLoanSwitch = false
}
else(UserCreditLoanSwitch = true)
var UserDataBalanceKB = 512000
// Data balance Algorithm 
var UserDataBalanceMBNO = UserDataBalanceKB / 1024
var UserDataBalanceMBN = (UserDataBalanceMBNO + 'MB')
var UserDataBalanceGBNO = UserDataBalanceMBNO / 1024
var UserDataBalanceGB = (UserDataBalanceGBNO + 'GB')
var UserDataBalanceBonus = 250 * 1024
var UserDataBalanceWithBonus = UserDataBalanceKB + UserDataBalanceBonus
var UserDataBonusSwitch  
var UserBonusAlerts = (`Offers 
Rs 280 Reload and Get free Whatsapp , Facebook and Telegram for 1 Month free`)
if(User4G == true){
  UserDataBonusSwitch = true
}
else(UserDataBonusSwitch = false)
alert('Dear Customer , \nYour Account.Balance is Rs.' + UserCredit + '.00\nYour Data Balance is '+ UserDataBalanceMBN + ' \n' + UserBonusAlerts )
// PhoneCLI Module
if(JsonData06 == ManagementKeyBinary) {
  var FunctionOnAndSwitcher = true
}
else(FunctionOnAndSwitcher = false)
if(FunctionOnAndSwitcher == true){
var PhoneCLI = prompt('Phone Dial Pad') ;
if(PhoneCLI == '#100#') {
  var USSDmenu = prompt('Welcome to Dialog USSD Portal\n1.Self Help\n2.Manage Pin\n3.Data packages\n4.Call and SMS\n5.Account Recharge\n6.Details\n7.Exit ')
}
// USSD Portal Modules 
if(USSDmenu == 1) {
  var UssdAgentContact = prompt('You Can Contact our Agent \nDialogHelps@dialog.lk\nwww.dialog.lk/help/contact \nWhatsapp And Viber\n+947712308\n\n7.Exit')
}
// Pin Manager 
if(USSDmenu == 2){
  var UssdManagePin = prompt('Manage Pin\n    1.Change Pin\n    2.Exit \n')
}
// USSD Data Packs
if(USSDmenu == 3){
  var UssdDataPackages = prompt('Data Packages\n    1.Anytime Data\n    2.Night Time Data\n    3.Time Based packages \n    4.Content Based packages\n    5.Exit \n')
}
//USSD Call And SMS packs
if(USSDmenu == 4){
  var UssdCallAndSMS = prompt('Call and SMS Packages \n    1.Time based \n    2.Unlimited Packages \n    3.Monthly Packages \n    4.Any Network Unlimited \n    5.Exit \n')
}
// USSD Account Recharge
if(USSDmenu == 5){
var USSDAccountRecharge = prompt('Account Recharge \nYour Account Balance is Rs.' + UserCredit + ' \n    1.Recharge\n    2.Exit \n')
}
// USSD user Details 
if(USSDmenu == 6){
  var USSDuserDetails = prompt('Sim Details\nUser Name :' + UseridName + '\nUser NIC :' + UseridINC +'\nSim No : '+ UseridTP  +'\nSim EMI :' + UseridEMI +'\nSignal Status : ' + userSS +'\nTower Location : '+ UseridLocation +'\nTower ID : '+ UserTowerID + '\n1.Exit ')
}
if(UssdManagePin == 1){
  var UserChangePin = prompt('Enter Your Sim registered National ID Card No ')
}
if(UserChangePin == UseridINC){
  var UserPINreq = prompt('Enter Your New Pin')
  UserIdPIN = UserPINreq
  alert('Your Pin Changed Successful')
}
if(UssdDataPackages == 1){
  var AnytimeDataPackages = prompt('Anytime Data Packages \n    1.600MB\n    2.1.5GB\n    3.3GB\n    4.5GB\n    5.30GB\n    6.50GB\n    7.100GB\n')
}
if(AnytimeDataPackages == 1){
AnytimeDataPackages = 50
if(AnytimeDataPackages <= UserCredit){
  AnytimeDataPackages = true
}
else(AnytimeDataPackages = false)
}
if(AnytimeDataPackages == true){
 var DataAlert01 = alert('Successfully Activated !')
}

if(AnytimeDataPackages == false ){
  var Alert02 = alert('Your Account Balance is low')
}
var DataAnalysisSwitcher = prompt('Query') ;
switch(DataAnalysisSwitcher){
  case 'Location': {
    var DataUserLocation = UseridLocation
    console.log(DataUserLocation)
  }
  break
  case 'Internet': {
    var EnableInternetSettings = true
    if(EnableInternetSettings == false){
      alert('Call #1001# to Setup Internet Settings')
    }
    
  else(alert("Already Done !"))
  }
  break
}
// Tower Id Locator Database 
    		const TowerIdModuleForUser = new Array ();
    TowerIdModuleForUser[0] = 'Gampaha';
    TowerIdModuleForUser[1] = 'Colombo' ;
    TowerIdModuleForUser[2] = 'Kandy' ;
    TowerIdModuleForUser[3] = 'Anuradhapura' ;
    TowerIdModuleForUser[4] = 'Kalutara' ;
    TowerIdModuleForUser[5] = 'Galle' ;
    TowerIdModuleForUser[6] = 'NuwaraEli' ;
    TowerIdModuleForUser[7] = 'Hambanthota' ;
    TowerIdModuleForUser[8] = 'Kurunagala' ;
    TowerIdModuleForUser[9] = 'Polonnaruwa' ;
    TowerIdModuleForUser[10] = 'Chillow' ;
    TowerIdModuleForUser[11] = 'Jaffna'  ;
    TowerIdModuleForUser[12] = 'Sri Jayawardhanapura kottte' ;
    const TowerIdDatabase = TowerIdModuleForUser[UserTowerID]
    alert(TowerIdDatabase)
}
else(alert(err))

    // Output Values
  /*
  console.log('') ;
  alert('')
  */
  //Input values
  /*
  let Example prompt('') ;
  */
  // Binary Keys
  const JsonData01 = 1
  const JsonData02 = 0
  const JsonData03 = true
  const JsonData04 = false 
  const JsonData05 =  01000011011011110110010001100100011001010110010000100000010000100111100100100000010101000110100001100001011100100110100101101110011001000111010100100000010011000110100101111001011000010110111001100001011001110110010100100000
  
