using UnityEngine;
using System.Collections;

public class FallDetect2 : MonoBehaviour {
	Vector3 checkpoint; 

	// Use this for initialization
	void Start () {
		checkpoint = new Vector3 (47, 1, 95);
	}

	// Update is called once per frame
	void Update () {
		if (transform.position.y < -40) {
			transform.position = checkpoint; 
		}

	}
}
