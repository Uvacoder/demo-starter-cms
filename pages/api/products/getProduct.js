import { getXataClient } from '../../../lib/xata'

const xata = getXataClient()

const handler = async (req, res) => {
  // getFirst method is used to fetch records in database
  try {
    const data = await xata.db.products.read(req.body.id)
    res.json({ message: 'Success 😁', data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export default handler
