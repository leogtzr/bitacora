#!/bin/bash
set -x

readonly work_dir=$(dirname "$(readlink --canonicalize-existing "${0}")")

readonly doc_dir=$(dirname "${work_dir}")
mongodump --db bitacora --out "${doc_dir}/doc"

exit 0