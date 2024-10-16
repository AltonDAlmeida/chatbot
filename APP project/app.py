from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit-reservation', methods=['POST'])
def submit_reservation():
    data = request.get_json()
    room_type = data.get('roomType')
    guests = data.get('guests')
    check_in = data.get('checkIn')
    check_out = data.get('checkOut')

    # Here you can add logic to store or process the reservation data
    return jsonify({'status': 'success', 'message': 'Reservation received'})

if __name__ == '__main__':
    app.run(port=5500, debug=True)
