# OpenAI APIs

The project was written to test the possibilities of the OpenAI APIs for:

- Generating images from text prompts.
- Generating alternative images from the provided base images.
- Generating changes to existing images based on masks and text prompts.
- Generating text from text prompts.

# Running scripts

To use functionalities such as `top-level await`, the project uses `ESModules`, so to run scripts with `ts-node` you need to pass an additional `--esm` flag.

- `npx ts-node --esm image/create-image.ts`
- `npx ts-node --esm image/create-image-edit.ts`
- `npx ts-node --esm image/create-image-variation.ts`
- `npx ts-node --esm text/completion.ts`

# Outputs

The `outputs/` folder contains the results of running artificial intelligence algorithms to generate images and text.
