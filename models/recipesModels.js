const Recipe = new Schema = ({
    content: String,
    whenCreated: {
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    } 
})