#pragma strict
import SimpleJSON;
var city = "Canada/Toronto";
var apiKey = "3f15917e1cb664d7";

//http://www.wunderground.com/weather/api/    

var cityInfo_lon = 0.0;
var cityInfo_lat = 0.0;

var currentCondition = "";

var currentTemperature = 0.0;
var currentWindchill = 0.0;
var currentWindspeed = 0.0;
var windDirection = 0.0;
var pressure = 0.0;
var precipToday = 0.0;
var visibility = 0.0;


public var color1: Color = Color.red;
public var color2: Color = Color.blue;
var cam: Camera;

function Start () {

cam = GetComponent.<Camera>();
	cam.clearFlags = CameraClearFlags.SolidColor;

getWeatherConditions();

}
function Update () {
/*
	if (currentTemperature < 10) {
	//	GetComponent.<Camera>().backgroundColor = color2;
	Application.LoadLevel("ColdWorld");
	}
	else {
		GetComponent.<Camera>().backgroundColor = color1;

	}
//	Debug.Log(currentTemperature);
*/
}

function OnGUI () {
	



	GUI.Label(new Rect(10, 10, 150, 150), "Toronto's weather today is " + currentTemperature + "ºC".ToString());
	if (currentTemperature < 10) 
	{
 		GUI.Label(new Rect(10, 50, 200, 200), "It's cold, therefore the world seems more cooler to you.".ToString());
	}
	else
	{
		GUI.Label(new Rect(30, 30, 200, 200), "It's warm, therefore the world seems warmer in tone.".ToString());
	}
	
}


function getWeatherConditions()
{

var url = "http://api.wunderground.com/api/3f15917e1cb664d7/conditions/q/zmw:00000.1.71265.json";

var weatherData : WWW = new WWW (url);

yield weatherData;
var jsonString = weatherData.text;


var jsonData = JSON.Parse(jsonString);



cityInfo_lon = jsonData["current_observation"]["observation_location"]["longitude"].AsFloat;
cityInfo_lat = jsonData["current_observation"]["observation_location"]["latitude"].AsFloat;


currentCondition = jsonData["current_observation"]["weather"];
currentTemperature = jsonData["current_observation"]["temp_c"].AsFloat;
currentWindchill = jsonData["current_observation"]["feelslike_c"].AsFloat;
currentWindspeed = jsonData["current_observation"]["wind_kph"].AsFloat;

windDirection = jsonData["current_observation"]["wind_degrees"].AsFloat;
pressure = jsonData["current_observation"]["pressure_in"].AsFloat;
precipToday = jsonData["current_observation"]["precip_today_metric"].AsFloat;
visibility = jsonData["current_observation"]["visibility_km"].AsFloat;


}