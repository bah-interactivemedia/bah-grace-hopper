require 'json'
require 'octokit'

# array of repo data
repos = []

client = Octokit::Client.new :access_token => 'YOUR_ACCESS_TOKEN'

client.org_repos('gsa').each do |repo|
    repos.push({:name => repo.name, :description => repo.description, 
        :lang => repo.language, :stars => repo.stargazers_count,
        :forks => repo.forks_count, :issues => repo.open_issues_count })
end

puts repos.to_json