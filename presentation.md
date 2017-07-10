# React Native - Quick Start

----

## Build a simple Todo APP

 - 多么Simple?
 - 老Simple了

----

## Before we start - LifeCycles

----

## Mounting

| React Native       | iOS                     | Android                       |
| ------------------ | ----------------------- | ----------------------------- |
| constructor        | init*                   | constructor/onCreate          |
| componentWillMount | NA                      | onPause/onStart               |
| render             | \*Appear/\*Load | OnGlobalLayoutListener/onDraw |

----

## Updating

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()



[Reference](https://facebook.github.io/react/docs/react-component.html)

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
![](./img/QandA.jpg)
----



