import urllib.parse
import urllib.request
import json

def retrieve_place_id(location):
    service_url = "http://py4e-data.dr-chuck.net/json?"
    parameters = {
        'address': location,
        'key': '42'  # Replace '42' with your own key if you hamve one, or leave it as is for the autograder.
    }
    url = service_url + urllib.parse.urlencode(parameters)

    print(f"Retrieving {url}")
    try:
        json_data = urllib.request.urlopen(url).read()
    except urllib.error.URLError as e:
        print(f"Error retrieving data: {e.reason}")
        return None

    try:
        data = json.loads(json_data)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON data: {e}")
        return None

    if 'status' in data and data['status'] == 'OK':
        place_id = data['results'][0]['place_id']
        return place_id
    else:
        return None

# Prompt for the location
location = input("Enter location: ")

# Retrieve the place_id for the given location
place_id = retrieve_place_id(location)

# Display the result
if place_id:
    print(f"Place id: {place_id}")
else:
    print("Place id not found for the given location.")
