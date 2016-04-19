using UnityEngine;
using System.Collections;

public class StartGame : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Space)) {
			Application.LoadLevel ("3DArea");
		}
	
	}

	public void OnGUI()
	{
		if (GUI.Button(new Rect(500, 450, 500, 50), "or you can click here like the old-fashion sentient being you are."))
			Application.LoadLevel("3DArea");
	}
}
