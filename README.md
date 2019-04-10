### react-overlay-container

Use this React component to overlay on any other component. Great for loading screens. 

#### Dependency

1. [ReactLoading](https://www.npmjs.com/package/react-loading) - Thanks for the great loading icons. :smiley:	

#### Installing 

Install and import into your project

`npm i --save react-overlay-container`

`import { Overlay } from "react-overlay-container"`

#### Usage

###### Simple usage

```javascript
<Overlay>
  <div style={{height:'200px'}}>
    <p>I want to over this text with a loading screen</p>
  </div> 
</Overlay>
```

###### Show loading icon

```javascript
<Overlay loading={true}>
  <div style={{height:'200px'}}>
    <p>I want to over this text with a loading screen</p>
  </div> 
</Overlay>
```

###### Display custom component on the overlay

```javascript

const CustomComponent = () => {
  return <div>Custom component to show on the overlay</div>;
};

<Overlay
   loading={true}
   overlayData={<CustomComponent />}
 >
  <h1 style={{ height: "200px" }}>This is my loading tag</h1>
</Overlay>
```

###### Customize the overlay style

> Altering position would cause issues

```javascript
<Overlay
   loading={true}
   customStyle={{ backgroundColor: "rgba(211,231,22,0.6)" }}
 >
   <h1 style={{ height: "200px" }}>This is my loading tag</h1>
</Overlay>
```

###### Customize the Loading Icon Style

> View all the loading styles possible by visiting 
> https://www.npmjs.com/package/react-loading


```javascript
<Overlay
   loading={true}
   loadingStyle={{ type: "bars", color: "green" }}
 >
  <h1 style={{ height: "200px" }}>This is my loading tag</h1>
</Overlay>
```

#### Props options

Props | Type
------------ | -------------
loading | < Boolean > (default false)
loadingStyle | < Object >
overlayData | < JSX >
customStyle | < Object >
