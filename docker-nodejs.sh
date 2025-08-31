docker run --rm -v $(pwd):/app -w /app node:22 bash -c "\
	npm init -y && \
	npm install express nodemon && \
	npm install dotenv && \
	npm install @prisma/client && \
	npm install -D typescript @types/node @types/express prisma && \
	npx tsc --init && \
	npx prisma init"