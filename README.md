# NuChat

NuChat is an instant messaging app (similar to WhatsApp) built with [Nuxt 3](https://nuxt.com/) and [Supabase](https://supabase.com/).

You can find a further explanation of every part of the project in the following links:

-   [Nginx Reverse Proxy](./apps/nginx_reverse_proxy/README.md)
-   [SonarQube](./apps/nginx_reverse_proxy/README.md)
-   [Supabase](./apps/supabase/README.md)
-   [Frontend with Nuxt 3](./apps/web/README.md)

---

## Installation

This project uses [Turborepo](https://turbo.build/repo), so to install all dependencies from every part of the project you just need to run the following command:

```bash
npm install # or "npm i"
```

After that, you just need to run the next command to start the whole app:

```bash
npm run dev
```

> **Note**: Since Turborepo works with _npm monorepos_, running the previous commands in the project root will execute the exact same command in each folders inside `apps` directory (sub-project). You can also run the command you want inside each sub-project to avoid executing them globally.

### Port List

These are the ports where each sub-project is expose **locally**:

-   Web (Nuxt): `3000`
-   Supabase (Studio): `3100`
-   Supabase (API): `3200`
-   SonarQube: `3300`

---

## Usage

`WIP`: Since the app might change from the [low-fi prototypes](#low-fi-prototypes) this section will be fulfilled when the app is going to be finished.

---

## Low-Fi Prototypes

### Landing Page

![Landing page low-fi prototype](./docs/images/prototypes/landing-low.jpeg)

### Sign In Form

![Sign In Form low-fi prototype](./docs/images/prototypes/sign-in-low.jpeg)

### Main View

![Main View low-fi prototype](./docs/images/prototypes/main-view-low.jpeg)

### Profile

![Profile low-fi prototype](./docs/images/prototypes/profile-low.jpeg)

### Admin Panel

![Admin panel low-fi prototype](./docs/images/prototypes/admin-panel-low.jpeg)

## UML

### Use cases

#### Landing Page

![Landing page UML](./docs/images/uml/use_case_landing_page.png)

#### Sign In Page

![Sign in UML](./docs/images/uml/use_case_sign_in.png)

#### Chats Page

![Chats UML](./docs/images/uml/use_case_chats.png)

### Database

Since Supabase provide a lot of pre-made tables in their database, I'm going to represent only the ones that I create for this project but there are more under the hood.

![Database UML](./docs/images/uml/supabase.png)