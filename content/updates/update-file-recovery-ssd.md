+++
title = "SSD File UnRecovery"
date = 2018-09-06T17:24:34-07:00
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
The way data is written to SSD (Solid State Storage) is different from HDD (Hard Disk Drives). On SSD's data cannot be overwritten. Flash memory must first be erased before it can be written to. The smallest writable unit on a SSD is called a page which is typically 8 – 16 KB in size. The smallest unit that can be erased is a block which consists of several pages (8 – 16 MB in size). So to change a single byte, a page must be written to (re-programmed) and for that to happen the entire block must be erased first.

## Garbage collection
To speed up this process up the altered byte, plus all other in use pages are written to an empty block. The original block is then scheduled to be erased during a process called ‘garbage collection’. It is the SSD itself that takes care of this entire process. During idle time on your device, the garbage collection process erases pages no longer in use so blocks can be ready to be written to when a write operation is performed.

Also the drive may combine data from several partially used blocks into a new one during garbage collection.

## TRIM
If the data is deleted the operating system needs notify the SSD, so the invalid pages can be erased during garbage collection by issuing a TRIM command.

Although you may think there is still time between the deletion of a file and the actual garbage collection, most modern SSDs return zeros or random data when data is requested from an erased page.

Files or folders that were deleted or lost using normal operations within the operating system can not be recovered using undelete or file recovery software due to the operating system sending a TRIM command to the SSD.

File recovery from a SSD may be possible if there was a failed operation that does not involve garbage clean up or user intervention involving a delete or format command. If for example a file system becomes corrupted and no TRIM command is sent to the SSD then there is a good chance data can still be recovered.

If a accidental format or delete happens and then a TRIM command is issued it is very unlikely that the data can be recovered. You can always have your device's data analyzed for free with my Data Analysis/Recovery service. Just give me a [call](/#contact) or [contact](/#contact) me the site.
