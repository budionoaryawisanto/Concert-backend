import Events from "../models/eventModel.js";

export const GetEvents = async (req, res) => {
     try {
        const event = await Events.findAll({
            attributes: ['id', 'image', 'title', 'subtitle', 'location', 'place', 'date', 'regularPrice', 'vipPrice']
        })
        res.json(event)
    } catch (error) {
        res.status(400).json({message: error})
    }
}

export const UploadEvents = async (req, res) => {
    const image = req.file.path
    const { title, subtitle, location, place, date, regularPrice, vipPrice } = req.body

    if (!image || !title || !subtitle || !location || !place || !date || !regularPrice) {
        return res.status(400).json({message: "Please fill all form"})
    } 

    try {
        await Events.create({
            image: image,
            title: title,
            subtitle: subtitle,
            location: location,
            place: place,
            date: date,
            regularPrice: regularPrice,
            vipPrice: vipPrice,
        })
        res.json({message: "Upload Berhasil"})
    } catch (error) {
            res.status(400).json({ message: error.message })
    
    }
}