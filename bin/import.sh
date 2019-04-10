#!/bin/bash
set -x

readonly work_dir=$(dirname "$(readlink --canonicalize-existing "${0}")")
readonly doc_dir=$(dirname "${work_dir}")
mongorestore --db bitacora "${doc_dir}/doc/bitacora"

exit 0