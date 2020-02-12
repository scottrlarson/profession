+++
title = "Scooters Windows Tweaks"
date = 2020-02-12T08:37:16-08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Windows","Customization"]
categories = ["Tweaks"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

<div class="alert-container">These are tweaks that I make to my Windows configuration that improves my productivity. Performing these kinds of changes to Windows requires a careful understanding of programming, the Windows registry, and how to protect Windows from damage by making and restoring backups. Don't perform any of these tweaks unless you know what your doing. I am not liable, nor responsible for any action you take on behalf of this information.</div>

## File Explorer

### 1. Disable & Remove Quick Access 

[How to Disable Quick Access in Windows 10 File Explorer](https://blog.techinline.com/2018/11/30/how-to-disable-quick-access-in-windows-10-file-explorer/)

1. Open File Explorer and go to View tab > Options > Change folder and search options.
2. Choose This PC from the top drop-down menu.
3. Uncheck both boxes under the Privacy section.
4. Press Clear to clear all of your Quick Access history. (optional)

[How to: Removing Quick Access from Windows 10 File Explorer](https://community.spiceworks.com/how_to/166304-removing-quick-access-from-windows-10-file-explorer)

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer
```

DWORD HubMode 1

The .reg files below will modify the DWORD value in the registry key below.

### Reorder "Libraries" folder above "This PC"

https://www.tenforums.com/tutorials/72210-move-libraries-above-pc-navigation-pane-windows-10-a.html

```
HKEY_CLASSES_ROOT\CLSID\{031E4825-7B94-4dc3-B131-E946B44C8DD5}
```


DWORD SortOrderIndex

54 (hex) = Below This PC
42 (hex) = Above This PC

### Remove OneDrive

```
HKEY_CLASSES_ROOTCLSID{018D5C66-4533-4307-9B53-224DE2ED1FE6}
```

DWORD System.IsPinnedToNameSpaceTree 1

### Remove DLNA Media Servers

Remove HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\DelegateFolders\{289AF617-1CC3-42A6-926C-E6A863F0E3BA}

Remove HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\DelegateFolders\{289AF617-1CC3-42A6-926C-E6A863F0E3BA}