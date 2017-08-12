#!/usr/bin/env bash
##
# Seed Users
#
# Creates dummy users for testing.
#
# Run from root of the code repository.
#
# This script is not automatically triggered by Grunt, and must be run/automated
# separately if desired in a given environment.
##

drush @d8 user-create "d8admin" --password="admin1" --mail="d8admin@example.com"
drush @d8 user-add-role "administrator" "d8admin"
