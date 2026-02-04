# preact-native-custom-elements
## with react-native-paper, tailwind and uniwind

```jsx
    <PaperProvider>
      <View className="p-[10px]">
        <Text variant="headlineMedium">Welcome to React Native Paper with Vite!</Text>
        <Button mode="contained" onPress={() => console.log('Pressed')} className="mt-[15px]">
          Press me
        </Button>
      </View>
    </PaperProvider>
```

1. I need html5 custom elements/web components that can be also be used in a react-native app on a phone. 
2. I want to be able to style these components with tailwind.
3. I need a richer array of components than the react-native core components.

I was encouraged by [Daniel Williams work](https://github.com/dannyhw/react-native-web-vite-sb-examples) that it is indeed possible for me to have what I need. Thanks to Daniel Williams help with uniwind as the glue for this I now have it working. I hope that others, including my students at Wilfrid Laurier university, will be able to also use this to make components that can be used in progressive web apps or in react native.

*TODO: actually make this a preact-custom-element.

