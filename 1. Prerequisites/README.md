# 1.1 Prerequisites
Lets begin by setting the foundation for your future projects. We are going to set up the ideal enviroment for you to start developing in.

# Contents 
- [1.1. OS Bedrock](#11-os-bedrock)
  - [Windows](#windows)
  - [MacOS]()
  - [Linux ]()
- [1.2 Command Line](#12-command-line)
  - [Installing Dependencies]()
  - [Fundamentals]()

# 1.1 OS Bedrock
Lets get your operating system ready for development.

# Windows
> Windows 10 finally bridged the gap for developers and introduced a subfile system called "Linux on Windows" so you can finally use the Terminal/Bash on your Windows PC.
>
> We are going to assume you are on the *latest* version of Windows 10.
>
> (The guide for these steps can be found in it's entirety here: https://itsfoss.com/install-bash-on-windows/)

## Step 1: Enable “Windows Subsystem for Linux” feature

Go to Start menu and search for PowerShell. Run it as administrator:

<img src="https://i.imgur.com/0zV9okU.jpg" width="500px">

Once you have the PowerShell running, use the command below to enable Bash in Windows 10.

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

You’ll be asked to confirm your choice. Use Y or press enter:

<img src="https://i.imgur.com/C2g968L.jpg" width="500px">

Now you should be asked to reboot. Even if you are not asked to, you must restart your system.

## Step 2: Download a Linux system from Windows store

Once your system has rebooted, go to Windows Store and search for Linux.

<img src="https://i.imgur.com/WhrznRH.jpg" width="500px">

You’ll see the option to install Ubuntu or SUSE. I have installed Ubuntu for Bash on Windows here

<img src="https://i.imgur.com/3B1ZMJc.jpg" width="500px">

Once you choose the distribution of your choice, you’ll see the option to install it. Do note that it will download files of around 1Gb in size. So you should have a good internet connection here.

<img src="https://i.imgur.com/R4xo7nF.jpg" width="500px">

## Step 3: Run Linux inside Windows 10

You are almost there. Once you have installed, it’s time to see how to access Bash in Windows 10.

Just search for the Linux distribution you installed in the previous step. In my case it was Ubuntu. You’ll see that it runs like a normal Windows application.

It will take some time in installing and then you’ll have to set up the username and password.

<img src="https://i.imgur.com/68KfOKq.jpg" width="500px">

Don’t worry, it’s just for the first run. Bash shell will be available for use directly from the next time onwards.

Enjoy Linux inside Windows 10.

## Done

For troubleshooting problems please see the bottom section of this guide: https://itsfoss.com/install-bash-on-windows/

# 1.2 Command Line