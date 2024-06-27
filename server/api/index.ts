export default defineEventHandler(async ev => {
	await new Promise(res => setTimeout(res, 1000))
	return send(ev, 'response from api')
})
