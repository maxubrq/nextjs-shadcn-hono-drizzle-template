# NextJS + Shadcn + Hono + Drizzle + Supabase + Vitest Template

## Dependencies

- [NextJs](https://nextjs.org/): React Framework
- [ShadcnUI](https://ui.shadcn.com/): UI Components lib
- [Motion](https://motion.dev/): Animation lib
- [AnimeJS](https://animejs.com/): Animation lib
- [Hono](https://hono.dev/): Backend web framework
- [Drizzle ORM](https://orm.drizzle.team/): ORM library
  - [Drizzle Kit](https://orm.drizzle.team/docs/kit-overview): kit to migrate database
  - [Postgres](https://github.com/porsager/postgres): postgresjs
  - [dotenv](https://github.com/motdotla/dotenv#readme): dotenv variable environment
- [short-uuid](https://github.com/oculus42/short-uuid#readme): To generate short-uuid
- [Vitest](https://vitest.dev/): Testing library
- [Pretieer](https://prettier.io/): Format library

## Scripts

- `format`: format whole project
- `db:generate`: generate new migration
- `db:migrate`: migrate database
- `test`: run test
- `test:coverage`: run test with coverage report
- `dev`: serve project in dev mode
- `build`: build project

## Workflow

This use [Github Action](https://github.com/features/actions), the `.github/workflows/main-workflow.yaml`.

Support basic steps:

- Checkout project
- Set up environment
  - Set up Node version
  - Install pnpm
- Run test with coverage
- Upload coverage badge to Gist (optional)

### Add testing badge

1. Create personal token for repository
2. Set the personal tooken to the repository's variables
3. Create a Gist
4. Add the raw to the README

## Package structure

### Main folders

- `app`: The main folder for NextJS (App Folder)
- `components`: The components folder
  - `components/ui`: The atomic component folder
  - `components/widget`: The combined components (modules)
- `features`: The main folder for Backend
- `db`: The main folder for database
  - `schema.ts`: File that defines the schemas of the app
  - `index.ts`: Entry point for Drizzle settings
- `supabase`: Folder that generate migrations
- `misc`: Folder to contain the constants

### Sub-folders / Files

- `app/api/[...route]/route.ts`: Entry point for the backend app using Hono Framework
  - `app/api/[...route]/routes`: Sub folder to contain other routes
- `features/<feature_name>`: Folder for each feature
  - `<feature_name>/domain`: Schema, domain for the feature, and interfaces
  - `<feature_name>/application`: Application logic
  - `<feature_name>/infrastructure`: Concrete tech logic
  - `<feature_name>/presentation`: Client used logic
- `features/shared`: Shared logic accross all features
  - `shared/domain`: Shared domains, interfaces
  - `shared/infrastructure`: Shared concrette tech logic
  - `shares/presentation`: Shared client used logic