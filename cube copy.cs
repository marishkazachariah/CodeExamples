/*
 * Connecting Arduino to Unity using Serialport and IO.Ports. 
 * Unity reads values from Arduino based on input/output from user interaction. Those transform into movement in the world.
 */
using UnityEngine;
using System.Collections;
using System.IO.Ports;

public class cube : MonoBehaviour {
	
	public float speed; 

	private float amountToMove;

	//reading Arduino from serial port 
	SerialPort sp = new SerialPort("/dev/cu.usbserial-A104OF7B", 9600);

	void Start () {

		sp.Open();
		sp.ReadTimeout = 1;


	}

	// Update is called once per frame
	void Update () {
		amountToMove = speed * Time.deltaTime;

		if (sp.IsOpen) 
		{
			try
			{
				MoveObject(sp.ReadByte());
				print (sp.ReadByte());
			}
			catch(System.Exception)
			{

			}
		}
	}

	void MoveObject(int direction)
	{
		if (direction == 4) 
		{
			transform.Translate(Vector3.left * amountToMove, Space.World);
		}
		if (direction == 3) 
		{
			transform.Translate(Vector3.right * amountToMove, Space.World);
		}
		if (direction == 1) 
		{
			transform.Translate(Vector3.forward * amountToMove, Space.World);
		}
		if (direction == 2) 
		{
			transform.Translate(Vector3.back * amountToMove, Space.World);
		}

	}



}
	