# React Native - Quick Start

----

## Build a simple Todo APP

 - 多么Simple?
 - 老Simple了。

----

## Before we start - LifeCycles
<img src='./img/component-lifecycle.jpg' style="width: 60%;" />

----
* getDefaultProps
	```text
    Called only once when inited.
    ```
* componentWillMount
    ```text
    Called only once before first `render`.
    ```
* componentDidMount
	```text
    Called only once after first `render`.
    ```
* componentWillReceiveProps
	```text
    Will receive props. Useful along with `redux`
    ```
* shouldComponentUpdate
	```text
    Prevent over draw.
    ```
* componentWillUnmount
----

## Mounting

| React Native       | iOS                     | Android                 |
| ------------------ | ----------------------- | ----------------------- |
| constructor        | init*                   | constructor / onCreate  |
| componentWillMount | viewWillAppear          | onStart                 |
| componentDidMount  | viewDidAppear           | onResume                |
| render             | drawInRect / other code | onDraw / onCreateView   |
| componentWillUnmount | viewWillDisappear     | onPause / onStop / onDestroy  |

----

## Updating

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()



[Reference](https://facebook.github.io/react/docs/react-component.html)

----
## Unmounting

* componentWillUnmount()
----

## Create Project and add dependencies.

* react-native init [project]
* yarn start
* react-native run-ios

----

## Create Basic UI

* Todo list
* Add todo

----

## Use a `ListView`

* dataSource
* renderRow


| React Native | iOS                   | Android                             |
| ------------ | --------------------- | ----------------------------------- |
| dataSource   | dataSource            | adapter                             |
| renderRow    | cellForRowAtIndexPath | onCreate/BindViewHolder |


* *Reuse issues*

----

## Using flexbox
* flex
* flexDirection
	```text
    Direction on `primary axis`. 
    Default to 'column' - vertical layout
    ```
    
* justifyContent
* alignItems

----
## *justifyContent*

```text
Distribution of children along `primary axis`.
```
    
|     Value     |     Column direction     |      Row direction     |
| ------------- | ------------------------ | ---------------------- |
| flex-start    | align top                | align left             |
| center        | vertical center          | horizontal center      |
| flex-end      | align bottom             | align right            |
| space-around  | equal space in start & end on each component | * |
| space-between | equal space between each component | * |
    

----

## 有图有真相
* flexDirection: 'row'
<img src='./img/justifyContent.png' style="width: 50%"/>

----

## *alignItems*
```text
A component's style determines the alignment of children along the secondary axis
```
|     Value     |     Column direction     |      Row direction     |
| ------------- | ------------------------ | ---------------------- |
| flex-start    | align left               | align top              |
| center        | horizontal center        | vertical center        |
| flex-end      | align right              | align bottom           |
| stretch       | equal width              | equal height           |

----

## 有图有真相
* flexDirection: 'row'
<img src='./img/alignItems.png' style="width: 80%"/>

----
## Integrate Redux

* Add dependencies
* redux
* react-redux
* redux-persistent
* redux-thunk
* Add `actions`, `reducers` and `store`

----

## Using a third party lib

* Add JS dependency
* Modify iOS project
* Modify Android project

----

## Navigations

* react-native-navigation
* react-navigation
* [Glow] NativeNavigator

----

## Widgets & Animations

* View
* Text
* *Touchables*
* Images
* etc
----

## Deal with keyboard

* KeyboardAvoidingView
* *Keyboard* module

----
## Android Support

* Native calls
* Backkey
* Navigation
* Performance

----

## How we ride at Glow Community

* Common Widgets - Images, Texts, Buttons and more - *C9XXX*
* Navigations - *NativeNavigator*
* Modal dialogs and Alerts - *C9Dialog*
* Network - *APIClient*
* Native modules - *AppInfo*, *ForumBridge*, etc
* PubSub 

----
## Q&A
<img src='./img/QandA.jpg' style='margin-left: 100px' />

----



