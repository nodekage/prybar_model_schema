const eventSchema = new mongoose.Schema(
    {
        user_id : {
            type : mongoose.Types.ObjectId,
            ref : 'User'
        },
        start_time : {
            type : Date,
            required : true
        },
        end_time : {
            type : Date,
            required : true 
        },
        title : {
            type : String,
            required : true 
        },
        description : {
            type : String 
        },
        location : {
            type : String
        },
        time_slots : {
            type : Object,
        },
        participant_id : {
            type : mongoose.Types.ObjectId,
            ref : 'Participants'
        }
    }, {
        timestamps : true,
        toJSON : { virtuals : true},
        toObject: { virtuals : true}
    }
)
