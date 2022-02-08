

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

# Medium Clone

Medium homepage clone for the purpose of practicing next.js, tailwind css and sanity cms

## View

You can view the project by clicking here
[here](https://medium-clone-alysonfarias.vercel.app/)

Admin Painel - [here](https://alysonmd.sanity.studio/desk
)




## Stack

**Front-end:** Next.js, TailwindCSS

**Back-end:** Sanity.IO


## How to run

#### Clone the repository into your local

```
git clone https://github.com/alysonfarias/Medium-Clone.git
```

#### 


#### Admin painel 

How posts are consumed through CMS Sanity.Io and if you want with your own cms blog

You will need to have a .env.local file in the project root
with the following variables:

```
NEXT_PUBLIC_SANITY_DATASET= dataSetType -> production, developmnt
NEXT_PUBLIC_SANITY_PROJECT_ID= projectId

```

where you can get it on Sanity.io for  [free here](https://www.sanity.io/get-started)
and your also gonna need re-config the folder 'dbmedium' where after that
just go through cd [folderName] to acess painel

```
sanity start
```

and now you can see your pannel running on http://localhost:3333

to see the front-end clone

```
 npm run dev
```

gonna be running on http://localhost:3000


​    

## Feedback

If you have any feedback, please let me know via ramos.alysonfarias@gmail.com

## Useful documentations

[Sanity.IO CMS](https://www.sanity.io/)

[Next.js](https://nextjs.org/docs/getting-started)

