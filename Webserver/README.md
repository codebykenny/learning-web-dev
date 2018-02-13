# Webserver Fundamentals

Before we begin writing our own NodeJS webserver, we need to understand  what a webserver does.

In this section we will go over the fundementals of webserver communication with a browser.

# Contents

- [4.1 Communication](#communication)
- [4.2 Requests](#requests)
- [4.3 Responses]()

# Communication

I have often thought about what is the most simplistic way of describing the communication between a browser and a web server. When you want to start web development, this is obviously a fundamental aspect of web dev you need to grasp, how your server and the user's client interact with one another.

Without getting into Domain Name Systems.. I believe the best way to think of communication is in two parts: `Requests` & `Responses`.

<div align="center">
    <img src="./images/request_response.png" width="500px">
</div>

The first thing a web browser (client) does when it visits a homepage is it **Requests** a webserver for all of the information. It requests for the content of the webpage, the styles, the javascript, the images and documents. It sends a request for everything you see on a website.

A webservers sole purpose is to accept and read every single request, and issue an appropriate **Response** to the client for each **Request**. When creating a webserver you have to set rules in place so that you can appropriately handle any request sent it's way.

Lets break down how **Requests** and **Responses** are structured.

# Requests

To understand **Requests** it helps by simply looking at one in action. Lets try doing a search on a classified website such as craigslist. When we do a search for an item, lets say `"Honda Accord"` the website sends a **Request** to a webserver asking it for classifieds that include `"Honda Accord"`.

Using the [Chrome Dev Tools](https://developer.chrome.com/devtools) we can monitor the Network activity and see the **Request**.

<div align="center">
    <img src="./images/craigslist_request_simple.png" width="600px">
</div>

The most important part of a request is a URL, in fact in most cases a request can contain no data other than the data on the URL. The URL of the request contains the address of the webserver you're sending it to, as well as the specific data you want from it.

Let's break down the URL in this example:


```
https://miami.craigslist.org/search?query=honda+accord


 https      miami.craigslist.org      /search      ?query=honda+accord
   |                  |                  |                    |
   |                  |                  |                    |
 schema              host               path           query parameters
```

| Section | Description |
| ------- | ----------- |
| schema | Protocal of the request, in this case we are using `HTTPS` |
| host | This is the address for the webserver, where we are sending this request to. Usually a domain name, but can simply be an IP Address |
| path | This tells the host the specific resource we want from it, in this case we want to do a search |
| query parameters | This gives additional information for the resource we are requesting, in this case the search term  `Honda Accord` |

So to summarize: We are sending a request to the webserver on `miami.craigslist.org`, telling the webserver we want to do a `/search/` using the `?query`: `Honda Accord`.

This requests tells the webserver everything it needs to know to properly respond to it. This request object is telling the webserver what it needs.

Now the webserver is in charge to making a proper response back, so lets take a look at what a proper response from the server looks like.

# Response

The response for a webserver can be just about any type of resource, it could be data for a search, an image or document. It could also be the HTML on the page.

When creating a website, it's important that the webclient get's the expected information from the Webserver. If the browser is asking for an image, and the webserver responds with html, then the client will not know how to handle that because it wasnt expecting it.

Webservers should be consistent in the way they respond with data. There should be uniform structure accross all `paths`, and ultimately it is up to the architecture of the webserver how it expects to receive requests.

For our craigslist example, the response was simply the search results page showing all listings for `"Honda Accrod"`.

<div align="center">
    <img src="./images/response-1.png" height="300px">
    <img src="./images/response-2.png" height="300px">
</div>