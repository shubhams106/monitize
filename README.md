Vite is way faster than the CRA because Vite uses the ESbuild bundler while CRA uses Webpack which is slower than the ESbuild bundler.

for hitting api I have added a custom hook useFetch which can provide isLOading, error, data state. Instead of writing it again and again.

for pagination: we needed 2 values from api "before" and "after". but "before" value is always coming null. So I have used "after" value in url on both left and right, which means i am using same value on next and prev buttons

I have used shadcn instead of MUI because:

1. it does not make project heavy as we only install what we need.
2. using custom css on shadcn components is very easy whereas in mui if we write custom css classes sometimes we have to find exact classes where we can modify.

for designing part i didn't knew exactly what to enhance so:

1. I added a navbar with dummy links.
2. I added a theme functionality using context. depending upon dark or light theme i am changing text color and other relevant css.
3. all the css is been added to index.css. so that we don't have to repeat. and required variables such as color, shadow has been added to tailwind.config.ts.

For running the project

1. just clone the branch url i have shared.
2. go inside the folder
3. npm i
4. npm run dev
