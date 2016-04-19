#pragma strict
import SimpleJSON;
var city = "Toronto";
var apiKey = "get your own from openweathermap";

//http://openweathermap.org/api

var cityInfo_lon = 0.0;
var cityInfo_lat = 0.0;

var currentCondition = "";

var currentTemperature = 0.0;
var currentHumidity = 0;
var currentWindspeed = 0.0;
var windDirection = 0.0;
var pressure_seaLevel = 0.0;
var pressure_grndLevel = 0.0;


var getIcon = false;

function Start () {


getWeatherConditions();

}
function Update () {


}


function getWeatherConditions()
{
var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID="+apiKey;
var weatherData : WWW = new WWW (url);

yield weatherData;
var jsonString = weatherData.text;


var jsonData = JSON.Parse(jsonString);

cityInfo_lon = jsonData["coord"]["lon"].AsFloat;
cityInfo_lat = jsonData["coord"]["lat"].AsFloat;


currentCondition = jsonData["weather"][0]["description"];

currentTemperature = jsonData["main"]["temp"].AsFloat;
currentHumidity = jsonData["main"]["humidity"].AsInt;
currentWindspeed = jsonData["wind"]["speed"].AsFloat;

windDirection = jsonData["wind"]["deg"].AsFloat;
pressure_seaLevel = jsonData["main"]["sea_level"].AsFloat;
pressure_grndLevel = jsonData["main"]["grnd_level"].AsFloat;

	if(getIcon==true)
	{
	var iconURL = "http://openweathermap.org/img/w/"+jsonData["weather"][0]["icon"]+".png";
	var weathIcon : WWW = new WWW (iconURL);
	// Wait for download to complete
	yield weathIcon;
	// assign texture
	GetComponent.<Renderer>().material.mainTexture = weathIcon.texture;
	}


}