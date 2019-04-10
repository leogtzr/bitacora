#!/bin/bash

call_api() {
    local -r name="${1}"
    local -r nickname="${2}"
    local -r data=$(printf "{\"name\": \"%s\", \"nickname\": \"%s\"}" "${name}" "${nickname}")
    curl -X POST --noproxy '*' -H "Content-Type: application/json" -d "${data}" http://localhost:8083/api/employee
}

mongo bitacora --eval "printjson(db.dropDatabase())"

for emp_token in Mariela,Mariela Diana,Dianis Juan,Juan Roberto,Robert \
    Enrique,Kike Javier,Javi Francisco,Paco Carlos,Charly Manases,Manases; do
    name=$(echo "${emp_token}" | awk --field-separator ',' '{print $1}')
    nickname=$(echo "${emp_token}" | awk --field-separator ',' '{print $2}')

    call_api "${name}" "${nickname}"
    echo
done

exit 0