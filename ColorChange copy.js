#pragma strict
// ping-pong animate background color
public var color1: Color = Color.red;
public var color2: Color = Color.blue;
public var duration: float = 3.0F;
var cam: Camera;

function Start() {
	cam = gameObject.GetComponent(Camera);
	cam.clearFlags = CameraClearFlags.SolidColor;
}
function Update() {
	var t: float = Mathf.PingPong(Time.time, duration) / duration;
	cam.backgroundColor = Color.Lerp(color1, color2, t);
}