const participantSchema = new mongoose.Schema(
    {
        event_id : {
            user_id : {
                type : mongoose.Types,
                ref : 'Event'
            },
            email : {
                type : String,
                trim : true,
                required : true
            }
        },
        selected_time_slots : {
            type : Date,
            required : true
        }
    }, {
        timestamps : true,
        toJSON : { virtuals : true},
        toObject: { virtuals : true}
    }
)
