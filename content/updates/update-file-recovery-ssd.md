+++
title = "SSD File Recovery Options"
date = 2018-09-06T17:24:34-07:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "/updates/ssd-data-recovery/SSD-wallpaper-copy.jpg"
caption = ""

+++
The way data is written to SSD (Solid State Storage) technology is different from HDD technology (Hard Disk Drives). On SSD's data cannot be overwritten. Flash memory must first be erased before it can be written to. The smallest writable unit on a SSD is called a page which is typically 8 – 16 KB in size. The smallest unit that can be erased is a block which consists of several pages (8 – 16 MB in size). So to change a single byte, a page must be written to (re-programmed) and for that to happen the entire block must be erased first.

## Garbage collection
To speed up this process up the altered byte, plus all other in use pages are written to an empty block. The original block is then scheduled to be erased during a process called ‘garbage collection’. It is the SSD itself that takes care of this entire process. During idle time on your device, the garbage collection process erases pages no longer in use so blocks can be ready to be written to when a write operation is performed.

Also the drive may combine data from several partially used blocks into a new one during garbage collection.

## TRIM
If a file stored on a SSD is deleted, the operating system needs notify the SSD, so the invalid pages can be erased during garbage collection by issuing a TRIM command.

Although you may think there is still time between the deletion of a file and the actual garbage collection, most modern SSDs return zeros or random data when data is requested from an erased page.

Files, or folders, that were deleted, or lost during normal operating system operations most likely can not be recovered using software to undelete, or recover the lost data due to the operating system sending a TRIM command to the SSD.

File recovery from a SSD may be possible if the trim operation, or the garbage collection is interrupted in some way. Again TRIM and garbage collection happens when the user initiates a delete or format command from the operating system.  Another example of a possible data recovery situation is if the file system becomes corrupted and no TRIM command is sent to the SSD.

## Checking the TRIM Status on a SSD.

Most modern SSD's have the TRIM command enabled to improve performance, but you can check yourself in the following manner:

On a PC you can open a command prompt by going to the start menu and typing "cmd" right click on the command and select, "run as administrator". Once in the command line window, you can issue this command: 

'''
fsutil behavior query disabledeletenotify
'''
On a mac you can check the status of the TRIM command by going to "About this Mac" in the apple menu. The clicking on the system report button and looking uner the SATA Express Parameters, you will see a field called TRIM Support. If the field shows YES then TRIM is enabled.

## Conclusion
If a format or delete command completes its operation, and a TRIM command is issued it is very unlikely that the data can be recovered on a SSD. You can always have your device with my [Data Analysis/Recovery service](/services/data/recovery/). Just give me a [call](/#contact) or contact me using the [online form](/#contact).
