const mongoose = require('mongoose');
const submissionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "User id for the submissionService is Missing!"]
    },
    problemId: {
        type: String,
        required: [true, "Problem id for the submissionService is Missing!"]
    },
    code: {
        type: String,
        required: [true, "Code for the submissionService is Missing!"]
    },
    language: {
        type: String,
        required: [true, "language for the submissionService is Missing!"]

    },
    status: {
        type: String,
        enum: ["Pending", "Success", "RuntimeError", "TimeLimitExceeded", "MemoryLimitExceeded", "WrongAnswer"],
        default: "Pending"
    }
});

const SubmissionModel = mongoose.model("Submission", submissionSchema);
module.exports = SubmissionModel;