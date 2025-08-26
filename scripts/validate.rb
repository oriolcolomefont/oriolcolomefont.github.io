#!/usr/bin/env ruby
# Simple HTML validation script for Jekyll site

require 'html-proofer'

options = {
  # Disable external link checking for faster local validation
  disable_external: true,
  
  # Specify which checks to run (updated for html-proofer 5.x)
  checks: ['Images', 'Links', 'Scripts', 'OpenGraph'],
  
  # Allow hash hrefs for internal navigation
  allow_hash_href: true,
  
  # Ignore some files
  ignore_files: [
    # Ignore any temporary files
    /.*\.tmp$/
  ],
  
  # URL ignore patterns
  ignore_urls: [
    # Ignore mailto links
    /^mailto:/,
    # Ignore tel links  
    /^tel:/,
    # Ignore local anchor links
    /^#/
  ]
}

begin
  HTMLProofer.check_directory('./_site', options).run
  puts "✅ HTML validation passed!"
rescue SystemExit => e
  puts "❌ HTML validation failed!"
  exit e.status
end
