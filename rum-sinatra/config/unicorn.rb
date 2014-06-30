@dir = File.dirname(File.expand_path(__FILE__))

worker_processes 3
working_directory @dir

timeout 3

pid File.join(@dir, "tmp/unicorn.pid")

stderr_path File.join(@dir, "log/unicorn.err")
stdout_path File.join(@dir, "log/unicorn.out")

before_fork do |server, worker|
  Signal.trap 'TERM' do
    puts 'Unicorn master intercepting TERM and sending myself QUIT instead'
    Process.kill 'QUIT', Process.pid
  end
end

after_fork do |server, worker|
  Signal.trap 'TERM' do
    puts 'Unicorn worker intercepting TERM and doing nothing. Wait for master to send QUIT'
  end
end

