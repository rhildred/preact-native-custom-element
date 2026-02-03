# Native Wind
## Problem recreation

```jsx
		<View>
			<p className="italic">This is styled by tailwind</p>
			<Text className="bold">This is not</Text>
		</View>
```

I know why this doesn't work. The styling with react-native is done in a different manner than classnames. I want it to work anyways, please. 

I understand that this is what nativewind is for. Unfortunately, I have struggled to make nativewind work with this stack. I was encouraged by [Daniel Williams work](https://github.com/dannyhw/react-native-web-vite-sb-examples) that it is indeed possible. Ideally I would like Daniel William's [vite-plugin-rnw](https://github.com/dannyhw/vite-plugin-rnw)  to make it work, "out of the box."

My plan is to use this with [preact-custom-element](https://github.com/preactjs/preact-custom-element) to make components that can run in a progressive web app or in react-native for human machine interface work I am doing with students and some consulting customers.
