const ClaimForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="rollNo">Roll Number</label>

                <input
                    id="rollNo"
                    name="rollNo"
                    type="text"
                    placeholder="Enter your roll number"
                />
            </div>

            <div>
                <label htmlFor="feedback">Your Feedback</label>

                <textarea
                    id="feedback"
                    name="feedback"
                    placeholder="Tell us about your learning experience..."
                    rows={5}
                />
            </div>

            <button type="submit">
                Claim Certificate
            </button>
        </form>
    )
}

export default ClaimForm