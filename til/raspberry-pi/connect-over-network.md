## Connect to your Raspberry Pi over a network with SSH or RDP

#### Connect via SSH
On the Raspberry Pi, open terminal and type in ifconfig
Look for the inet flag (in this case, it's 192.168.1.3
Type in sudo raspi-config
Visit Interfacing Options, select SSH, and enable it.

At this point, open up terminal on your other machine and type in ssh pi@192.168.1.3 (or whatever the IP might be)
Raspberry Pi's password is raspberry, so type that in at the prompt
At this point  you are at the Raspberry Pi's prompt.

#### Install a way to RDP
sudo apt-get install tightvncserver
sudo apt-get install xrdp
