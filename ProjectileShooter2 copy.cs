using UnityEngine;
using System.Collections;

public class ProjectileShooter2 : MonoBehaviour {

	GameObject prefab;
	// Use this for initialization
	int ammo; 

	void Start () {
		prefab = Resources.Load ("projectile22") as GameObject;

	}

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.F)||Input.GetMouseButtonDown(0)) {
			ammo--;
			GameObject projectile = Instantiate (prefab) as GameObject;
			projectile.transform.position = transform.position + Camera.main.transform.forward * 2;
			Rigidbody rb = projectile.GetComponent<Rigidbody> ();
			rb.velocity = Camera.main.transform.forward * 40;
		}

	}
}
