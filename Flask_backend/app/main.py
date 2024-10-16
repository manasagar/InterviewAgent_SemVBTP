from flask import Flask, request, jsonify
import docker

app = Flask(__name__)

# Initialize Docker client to interact with containers
client = docker.from_env()


@app.route('/execute_code', methods=['POST'])
def execute_code():
    data = request.json
    code = data.get('code')
    language = data.get('language')

    if not code or not language:
        return jsonify({"error": "Missing code or language"}), 400

    # Based on the language, send the code to the appropriate container
    if language == 'python':
        return send_to_container('python-container', 'python', code)
    elif language == 'nodejs':
        return send_to_container('nodejs-container', 'node', code)
    else:
        return jsonify({"error": "Unsupported language"}), 400

# Function to send code to container
def send_to_container(container_name, cmd, code):
    try:
        code_file = "/tmp/code.py" if cmd == "python" else "/tmp/code.js"
        

        create_file_cmd = f'python -c "with open(\'{code_file}\', \'w\') as f: f.write(\'{code}\')"'


        container = client.containers.get(container_name)
        exec_cmd = f'{cmd} {code_file}'
        container.exec_run(create_file_cmd, stdout=True, stderr=True)
        
        result = container.exec_run(exec_cmd, stdout=True, stderr=True)
        
        
        
        if result.exit_code == 0:
            return jsonify({"output": result.output.decode()}), 200
        else:
            return jsonify({"error": result.output.decode()}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
