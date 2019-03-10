![](dist/assets/images/links-expressions/header.jpeg)

# Link’s Expressions

### Wind Waker Graphics Analysis Series

##### *By [Nathan Gordon](https://twitter.com/gordonnl)*

[*Back to main article*](?index)

The facial expressions in Wind Waker are a pivotal part to the game’s charm. Through the use of a handful of tiny textures, they suited the style perfectly, while giving the characters a breadth of emotive ability.

Here are a couple examples to start with.

![Concentration](dist/assets/images/links-expressions/concentration.jpeg)*Concentration*

![Awe](dist/assets/images/links-expressions/awe.jpeg)*Awe*

![Determination](dist/assets/images/links-expressions/determination.jpeg)*Determination*

And it’s hard to leave out this memorable gag — with the humour coming purely from a few, well-timed facial expressions.

<video src="dist/assets/videos/links-expressions/humour.mp4" playsinline loop muted autoplay="autoplay"></video>

Here is Link rendered using Threejs.

![](dist/assets/images/links-expressions/recreation.jpeg)

And here is an interactive Codepen. Have a play with the different facial features. It’s quite fun to see all of the combinations possible, no wonder they added a [‘selfie’ mode](https://www.youtube.com/watch?v=bJOGA8GCVHE) to the HD version!

<iframe src="https://medium.com/media/60814deea7421ea960a4f37d2fa8850a" frameborder=0></iframe>

The model was sourced from [Mystie](https://www.models-resource.com/submitter/Mystie/) — many thanks!

### Body

It was really amazing to dig into the model and check out the poly count and UV layout.

Below is the model in Maya, it’s made up of just 1674 vertices, 2802 triangles.

<video src="dist/assets/videos/links-expressions/body.mp4" playsinline loop muted autoplay="autoplay"></video>

You can see in the wireframe that it’s really quite low-poly, however the sharp edges actually work perfectly with this style.

Before I get to the facial expressions, I wanted to share some of the texture work used on the model — primarily this tiny texture.

![](dist/assets/images/links-expressions/texture.jpeg)

Here you can see the body’s UVs laid out relating to this texture. Here is everything except the facial features.

![](dist/assets/images/links-expressions/uvs.png)

An interesting note is that some features which are just a solid colour are not laid out at all. Instead, the whole mesh populates just a single UV coordinate. For example, the entire hair mesh gets its colour from a single point in the yellow portion of the map — used for the belt.

![](dist/assets/images/links-expressions/uvs-hair.png)

### Face

The facial features populate separate meshes to the body, and have their own textures. Below is an example of each type.

![](dist/assets/images/links-expressions/face-texture.jpeg)

Link’s facial set features textures for 7 eye shapes, 6 eyebrows, 9 mouths, and 1 pupil. You can play around with these options in the Codepen above.

Here we can see Link’s mouth’s UVs laid out over the corresponding image.

![](dist/assets/images/links-expressions/uvs-mouth.png)

The eyes, brows and pupils consist of separate meshes that are raised slightly above the face.

![](dist/assets/images/links-expressions/raised-eyes.jpeg)

If we zoom in extra close, we can also see that even the pupil and eye meshes are separated slightly, done to avoid [z-fighting](https://en.wikipedia.org/wiki/Z-fighting).

![](dist/assets/images/links-expressions/pupil-raised.jpeg)

The order isn’t obvious, as one would presume that the pupil lays behind the eye, as to mask it.

![](dist/assets/images/links-expressions/eye-mask.jpeg)

However this is instead achieved through masking inside the shader itself. The eye texture is used as a mask, making the pupil only visible in the white areas of the eye image.

### Pupils

Below we can see an example of Link’s pupils dilating. This meant that not only could they shift Link’s pupils around to have him look in different directions, they were also able to scale the pupil texture.

![](dist/assets/images/links-expressions/pupils-scale.jpeg)

This is achieved simply by scaling and shifting the UV coordinates themselves, and not the actual mesh. In my case, I passed the values into the fragment shader as a uniform, and updated the UVs accordingly.

### Shading

Even though it wasn’t related to Link’s expressions per se, I also had to simulate some simple lighting on the model to make the object more readable — notably the nose.

![](dist/assets/images/links-expressions/shading.jpeg)

This flat-shaded style really shines once some basic lighting is applied. All I have done here is a dot product of the mesh’s normal (facing direction) against a light direction. This gives you a value of -1 to 1, of which I clamped to a range of 0.6 to 1, and multiplied against the final colour.

All of the code can be found in this Codepen, which is the same as posted earlier in the article.

<iframe src="https://medium.com/media/60814deea7421ea960a4f37d2fa8850a" frameborder=0></iframe>

Short and sweet! There wasn’t too much to this effect, but it’s important none-the-less and very characteristic of the game’s unique style.

![](dist/assets/images/links-expressions/bye.jpeg)

[*Next article—Wind*](?wind)

[*Back to main article*](?index)

##### *By [Nathan Gordon](https://twitter.com/gordonnl)*