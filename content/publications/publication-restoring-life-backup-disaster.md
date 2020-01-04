+++
title = "Restoring your digital life from backup after a disaster"
date = 2019-12-21T14:44:47-08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

![Backing Up Your Digital Life Photo](/img/publications/digital-life/srl-digital-life-backup.png)

*Learn why solely backing up your data isn't always enough to recover from a disaster.*

In this update, you will learn about:

- <a href="#disaster-recovery-backup-what" name="list-disaster-recovery-backup-what">What is disaster recovery backup, and why should I care?</a>
- <a href="#planning-how" name="list-planning-how">How a little planning can drive a successful disaster recovery</a>
- <a href="#waiting-disaster-why" name="list-waiting-disaster-why">Why waiting for a disaster to happen before you plan is a bad idea </a>
- <a href="#terms" name="#list-terms">Understanding technology terms</a>

Knowing the difference between backup and disaster recovery, understanding key technology terms, and evaluating software along with storage options can help you develop an effective plan for avoiding the consequences of data loss and downtime after a catastrophe strikes.


![Types of disasters photo](/img/publications/digital-life/disaster-types.jpg)

## <a name="disaster-recovery-backup-what">What is disaster recovery backup, and why should I care?</a> <a href="#list-disaster-recovery-backup-what"><i class='far fa-arrow-alt-circle-up'></i></a>

**Backup** is the process of making an extra copy (or multiple copies) of data. You might need to restore data from a backup if you accidentally delete a file, or folder, or when a file, or folder becomes corrupted. 

**Disaster Recovery** is having all tools in place to recover from a loss of data. Do you just need to recover one file, a set of files, or your entire computer? If your entire computer needs to be recovered, will you lose anything recently saved? How do you perform a full recovery of your computer? Knowing the answers to these questions is essential to your recovery plan.

**Disaster Recovery Backup**, on the other hand, refers to the plan and processes for quickly reestablishing access to your data after a catastrophe. If your computer, or applications fail catastrophically, become lost, or stolen, your <a href="#terms-operating-env">operating environment</a> can be restored to a previous working condition, minimizing downtime.


> “I am prepared for the worst, but hope for the best.” - Benjamin Disraeli

![Backup storage options photo](/img/publications/digital-life/storage-options.jpg)

### What are the strengths and weaknesses of different storage options and locations
A backup and a disaster recovery backup are similar in that they both need a location to store a copy of the data that is needed for a restoration.

In a <a href="#terms-cloud-storage" name="cloud-storage">**Cloud Storage**</a> scenario, data is stored outside the home, or small office. This off-site location protects your data from being destroyed by a tragedy, like a fire, or loss from a theft of your equipment. The speed and reliability of the <a href="#terms-cloud-backup" name="cloud-backup">Cloud Backup</a> service, as well as the internet connection to your home, or office, is a factor in determining the length of time needed for a data restoration.

<a href="#terms-network-storage" name="network-storage">**Network Storage**</a>, or a <a href="#terms-network-storage">**Network Attached Storage Device (NAS)**</a> are storage locations that give you Cloud like storage in your home. Network Storage gives you the ability to store files onto it from any device in your home that is connected to your home, or business network. The speed in which data can be transferred to, and from a NAS is largely dependent on the kind of hardware (<a href="#terms-router" name="router">Router</a>, <a href="#terms-wifi-access-point" name="wifi-access-point">WiFi Access Point</a>, <a href="#terms-network-switch" name="network-switch">Network Switch</a>, <a href="#terms-network-cabling" name="network-cabling">Network Cabling</a>) you have, and the connection between the NAS and your devices (Wired or Wireless). In my experience, Network Storage Devices are less susceptible to physical connection problems and damage due to the fact that they are rarely moved from their physical location. Wired connections are typically faster than Wireless connections. There are many types of Wired and Wireless connections. Having the latest technology insures that you will have the fastest transfer speeds between two or more devices. Transfer speeds between devices is really important. The less time it takes for data to transfer to and from devices the less likely a problem will occur in the transfer, or backup.

The benefit of using a <a href="#terms-local-storage" name="local-storage">**Local Storage**</a> device over Cloud or Network storage is speed, convenience, and ease of use. But moving the storage device around, regularly disconnecting/reconnect it, often in situations that require it, like bringing a laptop with you on the go, may eventually cause damage to, or cause a connection problem with the storage device. In many cases, when a connection problem shows up, the backup software cannot do its job, and you may not know that there is a problem until it's too late.

In most cases, drawbacks of each technology cannot be avoided. It’s best to choose two, or more storage options that work best for your needs and make redundancy your friend. If one storage device, or location fails, have another, and another. Three storage locations are optimal.


![planning to recovery your digital life](/img/publications/digital-life/disaster-recovery-choice.jpg)

## <a name="planning-how">How a little planning can drive a successful disaster recovery</a> <a href="#list-planning-how"><i class='far fa-arrow-alt-circle-up'></i></a>
### Identifying the best technologies for achieving your backup and disaster recovery goals for home and small businesses
The important thing to understand first is what kind of computer user you are: **Basic**, **Intermediate**, or **Advanced**.

> “I just do email and docs..”

As a **Basic** user you might not need much of a backup solution. The trick is to find out what you do with your device most of the time, and see if you actually need a backup solution. If you view your mail online using Gmail, Yahoo Mail, or Microsoft (Hotmail,or Outlook Mail) you are agreeing to let that provider store your mail for you. Be aware that just having a Cloud based Email provider store your Email for you may not shield you from mail loss. Even using an Email application like Outlook, or Thunderbird, your mail is stored on the mail server (Not on your device. It might be important to you to archive mail to some other location within your possession. Mail applications usually have archiving functionality which allows you to store a copy of your mail on your device’s storage drive.

Documents are usually stored on your device’s storage drive unless you are using a Cloud Storage service. If you do not use a Cloud Storage service like <a href="https://www.dropbox.com/">Dropbox</a> or <a href="https://www.google.com/drive/">Google Drive</a>, then your documents are stored on your device’s storage drive. Having a backup solution safeguards that data in case you lose your device, or it becomes damaged.


> “I know enough just to get myself into trouble…”

As an **Intermediate** user, you probably use your device professionally, or for education purposes and you work with more than just mail and documents. You might also save files like music, pictures, and videos. You may use non-standard applications like Turbotax, or Quickbooks. In a case like this, regular automatic backups using backup <a href="#backup-software-what" name"software" name="backup-software">software</a> might be preferable to you.


> “I know my stuff, but I don't really do backup that well…”

As an **Advanced** user, the way you use your device, the placement of everything stored on the device, and the programs you use are all vital to your everyday activities. If you  lost access to your device for too long, it would probably cause a problem for you. In a case like this, using Disaster Recovery Backup <a href="#backup-software-what">software</a> to backup a full copy of your <a href="#terms-system-drive" name="system-drive">system drive</a> <a href="system-drive"><i class='far fa-arrow-alt-circle-up'></i></a> might be preferable to you.


## <a name="backup-software-what">What kind of backup software do I need?</a> <a href="#backup-software"><i class='far fa-arrow-alt-circle-up'></i></a>
There are a host of backup software solutions on the market. For **local backups**, Windows 10 comes with its own backup solution called [File History](https://blogs.msdn.microsoft.com/b8/2012/07/10/protecting-user-files-with-file-history/). If you are a **Basic**, or **Intermediate** user this might work for you. You would need to purchase an external hard drive and set up File History to perform regular backups of your important storage locations. If you find that you require more control over the way your data is backed up than what File History offers, commercial third party products such as [EaseUS ToDo Backup](https://www.easeus.com/backup-software/tb-enterprise.html?ad&gclid=EAIaIQobChMImPS1-ea65gIVth6tBh0thgM9EAAYAiAAEgKfgvD_BwE), and [Paragon Backup and Recovery](https://www.paragon-software.com/backup-recovery/) can offer more options.

For **Intermediate** and **Advanced** users, who cannot be without access to their programs and data for too long, and want to minimize the time in recovering from a disaster, I recommend Disaster Recovery Backup software like [Macirum Reflect](https://www.macrium.com/reflectfree), or [Acronis True Image](https://www.acronis.com).

## <a name="waiting-disaster-why">Why waiting for a disaster to happen before you plan is a bad idea</a> <a href="#list-waiting-disaster-why"><i class='far fa-arrow-alt-circle-up'></i></a>
Many things can happen in the process of using your device. The place where you store your device could be involved in a catastrophe, your device could be stolen, your device’s internal storage drive could fail, you could accidentally delete a file, or a file could become corrupted in the process of using your device.

Don’t wait until it’s too late to devise a plan to protect your data. Protecting your data is like having insurance, you don't know when, or if, you will need it, but when you do, boy can it be a lifesaver.
Having a plan also builds confidence, so when your data becomes inaccessible, you have actions you can take to restore your access. Just having a plan alone can help you improve your knowledge about what you know, and don’t know about your device and your data.

## Conclusion
With a disaster recovery solution in place you can protect yourself from:

- <a href="#terms-downtime" name="downtime">Downtime</a>, by avoiding lengthy repairs to your device.
- High repair, or data recovery costs when a device fails catastrophically.
- <a href="#terms-malware" name="malware">Malware</a>, or <a href="#terms-ransomeware" name="ransomeware">Ransomeware</a> infections by being able to restore from a previous backup.

[Contact me](http://scottrlarson.com/#contact) for more information about developing a backup plan. I can help you identify what backup solution you need, and help you manage it.

## <a name="terms">Terms</a>
- <a name="terms-cloud-backup">**Cloud Backup**</a> is a software-as-a-service solution that is designed to backup your most important data at regular intervals. You usually pay a monthly fee for the storage space and the software to backup your device. <a href="#cloud-backup"><i class='far fa-arrow-alt-circle-up'></i></a>
- <a name="terms-cloud-storage">**Cloud Storage**</a> is a data center that is accessed via a cloud software service. <a href="#cloud-storage"><i class='far fa-arrow-alt-circle-up'></i></a>
- <a name="terms-downtime">**Downtime**</a> is the length of time when you are unable to access your device, or any data that is stored on that device. <a href="#downtime"><i class='far fa-arrow-alt-circle-up'></i></a>
- <a name="terms-local-storage">**Local storage**</a> is a hard, or solid state storage drive that is either mounted the device, or connected to the device externally via USB or SATA. Network storage is a storage device that is connected to your computer via your modem or router using an Ethernet or Wireless connection. <a href="#local-storage"><i class='far fa-arrow-alt-circle-up'></i></a>
- <a name="terms-malware">**Malware**</a> is software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system. <a href="#malware"><i class='far fa-arrow-alt-circle-up'></i></a>
- <a name="terms-network-storage">**Network Storage**</a>, or a <a name="">**Network Attached Storage (NAS)**</a> is a device that contains a storage drive and can be connected to an existing home, or office network. <a href="#network-storage"><i class='far fa-arrow-alt-circle-up'></i></a>
- A <a name="terms-network-switch">**Network Switch**</a> is a device that allows you to connect multiple devices to a network allowing those devices to either talk to the internet, or to each other. <a href="#network-switch"><i class='far fa-arrow-alt-circle-up'></i></a>

- <a name="terms-network-cabling">**Network Cabling**</a> are the cords that are used in connecting or hard wiring devices to a network. <a href="#network-cabling"><i class='far fa-arrow-alt-circle-up'></i></a>
- An <a name="terms-operating-env">**Operating Environment**</a> is the software and data related to accessing your files.  It allows you to log into your device and be presented with a desktop containing applications you can open, and files you can access. <a href="#operating-env"><i class='far fa-arrow-alt-circle-up'></i></a>
- <a name="terms-ransomeware">**Ransomware**</a> is a type of malware from cryptovirology that threatens to publish the victim's data or perpetually block access to it unless a ransom is paid. <a href="#ransomeware"><i class='far fa-arrow-alt-circle-up'></i></a>
- A <a name="terms-router">**Router**</a> is a network device that helps provide internet access to multiple devices in the home, or small office. <a href="#router"><i class='far fa-arrow-alt-circle-up'></i></a>
- A <a name="terms-system-drive">**System Drive**</a> is the drive that your device boots and operates from. In most cases all of your settings: What applications you have installed, and the look and feel of your desktop and even your personal/business data are stored on the system drive. <a href="#system-drive"><i class='far fa-arrow-alt-circle-up'></i></a>
- A <a name="terms-wifi-access-point">**WiFi Access Point**</a> is a device that connects to your router giving your devices Wifi access to your internet connection. Most routers come with Wifi so you would not normally use a Wifi Access point unless you needed to extend the range of your WiFi coverage in a home or office. <a href="#wifi-access-point"><i class='far fa-arrow-alt-circle-up'></i></a>
- A <a name="terms-wired">**Wired**</a> connection between two devices involves some kind of transmission cable. <a href="#wired"><i class='far fa-arrow-alt-circle-up'></i></a>
- A <a name="terms-wireless">**Wireless**</a> connection uses radio frequencies to transfer data between two devices. <a href="#wireless"><i class='far fa-arrow-alt-circle-up'></i></a>

 
