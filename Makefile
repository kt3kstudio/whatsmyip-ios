.PHONY: asset

asset: bower_components
	cd bower_components/whatsmyip-core && bundle install && bundle exec middleman build

bower_components:
	bower install
