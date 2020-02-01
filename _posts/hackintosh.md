This is the written out version of a brief guide I found on creating a Hackintosh with an old Thinkpad laptop.  Enjoy!

You'll need a Linux terminal or an actual Macintosh for this.  I chose a Linux terminal.
Clone repository by this command:  git clone https://github.com/notthebee/macos_usb
cd into the macos_usb directory using cd macos_usb
Run ./macos_usb.sh

The script will download the packages and when when complete will ask you to pick your USB devices.  It handily displays all devices, so choose correctly!

Once found, it will flash the image to the USB device.

Clone another repository:  git clone https://github.com/notthebee/t440p-hackintosh

CD into the t440p-hackintosh folder

Look at the directory again with lsblk to find the first partition of your USB stick (should be /dev/sdb1 or /dev/sdd1)

Use command sudo mount /dev/sdb1 /mnt

Copy the EFI folder to the partition using sudo cp -rv EFI /mnt

Reboot the computer


